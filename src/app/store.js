import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '../component/todo-list/todoSlice';

export const store = configureStore({
  reducer: todoReducer
});


