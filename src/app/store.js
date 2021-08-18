import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { slice } from './todoSlice';

const store = configureStore({
  reducer: slice,
});

export default store;
