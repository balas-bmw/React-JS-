

import { combineReducers } from 'redux';
import { productsReducer } from './products'
import { reviewsReducer } from './reviews'


export default combineReducers({
    products: productsReducer,
    reviews: reviewsReducer
});