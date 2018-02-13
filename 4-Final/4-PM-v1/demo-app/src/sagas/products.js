


import { put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api from '../api/Api';

// Our worker Saga: will perform the async loadProducts task
export function* loadProductsAsync() {
    let response = yield Api.loadProducts() // promise
    let products = yield response.json() // promise
    yield put({ type: 'LOAD_PRODUCTS', products })
}
export function* saveProductAsync(action) {
    let response = yield Api.saveProduct(action.product) // promise
    let product = yield response.json() // promise
    yield put({ type: 'SAVE_PRODUCT', product })
}
// Our worker Saga: will perform the async loadProducts task
export function* deleteProductAsync(action) {
    let response = yield Api.deleteProduct(action.id)
    yield put({ type: 'DELETE_PRODUCT', id: action.id })
}

// Our watcher Saga
export function* watchLoadProductsAsync() {
    yield takeEvery('LOAD_PRODUCTS_BEGIN', loadProductsAsync)
}

export function* watchSaveProductAsync() {
    yield takeLatest('SAVE_PRODUCT_BEGIN', saveProductAsync)
}

export function* watchDeleteProductAsync() {
    yield takeEvery('DELETE_PRODUCT_BEGIN', deleteProductAsync)
}

