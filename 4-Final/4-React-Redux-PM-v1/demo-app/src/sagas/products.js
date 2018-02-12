

import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'

import Api from '../api/Api';
import { deleteProduct } from '../actions/products';

// Our worker Saga: will perform the async loadProducts task
export function* loadProductsAsync() {
    let response = yield Api.loadProducts()
    let products = yield response.json()
    yield put({ type: 'LOAD_PRODUCTS', products })
}
// Our worker Saga: will perform the async loadProducts task
export function* deleteProductAsync(action) {
    let response = yield Api.deleteProduct(action.id)
    yield put({ type: 'DELETE_PRODUCT_SUCCESS', id: action.id })
}

// Our watcher Saga
export function* watchLoadProductsAsync() {
    yield takeEvery('LOAD_PRODUCTS_ASYNC', loadProductsAsync)
}
export function* watchDeleteProductAsync() {
    yield takeEvery('DELETE_PRODUCT', deleteProductAsync)
}
