

import { combineReducers } from 'redux';
import { counter } from './conter';
import { products } from './products';


export default combineReducers({
    counter,
    products
});