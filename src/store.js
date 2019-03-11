import { createStore, compose, applyMiddleware } from 'redux';
import { middleware } from './middleware';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
