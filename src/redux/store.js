import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todo from './reducers/todo';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo,
  },
});
