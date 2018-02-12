
import { all, fork } from 'redux-saga/effects'
import { watchLoadProductsAsync } from './products';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        fork(watchLoadProductsAsync)
    ])
}