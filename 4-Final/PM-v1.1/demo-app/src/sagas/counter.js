


import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync(action) {
    yield delay(5000) // 
    yield put({ type: 'INCREMENT', value: action.value })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

