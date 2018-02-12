
import { all } from 'redux-saga/effects'

import { watchIncrementAsync } from './counter';
import { watchLoadProductsAsync, watchDeleteProductAsync } from './products';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchLoadProductsAsync(),
        watchDeleteProductAsync()
    ])
}