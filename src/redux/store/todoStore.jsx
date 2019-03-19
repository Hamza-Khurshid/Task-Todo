import { createStore } from 'redux';
import todoReducers from '../reducers/todoReducers';

let store = createStore( todoReducers );

export default store;