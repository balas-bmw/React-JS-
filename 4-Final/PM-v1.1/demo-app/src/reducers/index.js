

import { combineReducers } from 'redux';
import counter from './counter';
import products from './products';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    counter,
    products,
    form:formReducer
});
