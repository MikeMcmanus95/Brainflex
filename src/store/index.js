import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user';

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'REMOVE_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

const middleware = composeWithDevTools(
  applyMiddleware(thunk, createLogger({ collapsed: true }))
);

const store = createStore(rootReducer, middleware);

export default store;
