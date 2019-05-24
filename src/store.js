import { createStore } from 'redux';
import rootReducer from './reducers/index';

const defaultState = {
    messages: [
        //{id: 1, text: 'example text'},
        //{id: 2, text: 'hello world'}, 
    ]
}

const store = createStore(rootReducer, defaultState);
window.store = store; // Used for the debugging purposes. To get state, use console and type in: window.store.getState()

export default store;