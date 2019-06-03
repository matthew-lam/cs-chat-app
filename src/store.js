import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const defaultState = {}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
window.store = store; // Used for the debugging purposes. To get state, use console and type in: window.store.getState()

export default store;