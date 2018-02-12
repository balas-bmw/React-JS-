
import { put, call, takeLatest,takeEvery } from 'redux-saga/effects'

import { loadAllProducts } from '../api/products';


// Our worker Saga: will perform the async loadingProducts task
function* loadProductsAsync() {
    try {
        let products = yield call(loadAllProducts);
        yield put({ type: 'LOAD_PRODUCTS_SUCCESS_SAGA', products })
    } catch (error) {
        //yield put({ type: 'LOAD_PRODUCTS_ERROR_SAGA', products })
    }
}


// Our watch Saga: will perform the async loadingProducts task
export function* watchLoadProductsAsync() {
    yield takeEvery('LOAD_PRODUCTS_REQUEST', loadProductsAsync)
}
