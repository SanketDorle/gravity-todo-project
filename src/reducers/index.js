import { combineReducers } from 'redux';

import {  todoList } from './todo.reducer'

const rootReducer = combineReducers({
  todoList
});

export default rootReducer;