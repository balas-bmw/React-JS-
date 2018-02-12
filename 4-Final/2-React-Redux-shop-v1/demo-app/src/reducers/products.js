
import {
    LOAD_PRODUCTS_SUCCESS,
} from '../constants';

export function productsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_PRODUCTS_SUCCESS:
        case 'LOAD_PRODUCTS_SUCCESS_SAGA':
            return [...state, ...action.products];
        default:
            return state;
    }
}