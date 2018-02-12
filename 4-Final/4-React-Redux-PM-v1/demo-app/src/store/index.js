

import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()

let middleware = [sagaMiddleware];
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

let preLoadedState = {
  counter: 0
}

const store = createStore(rootReducer, preLoadedState, composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

sagaMiddleware.run(rootSaga);

export default store;

