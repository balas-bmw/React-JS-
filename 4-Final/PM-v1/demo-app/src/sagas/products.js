


import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api from '../api/Api';

// Our worker Saga: will perform the async loadProducts task
export function* loadProductsAsync() {
    let response = yield Api.loadProducts() // promise
    let products = yield response.json() // promise
    yield put({ type: 'LOAD_PRODUCTS', products })
}

// Our watcher Saga
export function* watchLoadProductsAsync() {
    yield takeEvery('LOAD_PRODUCTS_BEGIN', loadProductsAsync)
}

