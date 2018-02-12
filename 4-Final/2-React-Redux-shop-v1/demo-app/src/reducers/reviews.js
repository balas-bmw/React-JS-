

import {
    LOAD_REVIEWS_SUCCESS,
    SUBMIT_NEW_REVIEW_SUCCESS
} from '../constants';

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_REVIEWS_SUCCESS: {
            return Object.assign({}, state, { [action.prodId]: action.reviews })
        }
        case SUBMIT_NEW_REVIEW_SUCCESS: {
            // debugger;
            let reviews = state[action.prodId] || [];
            reviews.push(action.review);
            return Object.assign({}, state, { [action.prodId]: reviews })
        }
        default:
            return state;
    }
}