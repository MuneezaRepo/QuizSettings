import { configureStore } from '@reduxjs/toolkit';
import reducerSlice from './reducerSlice.js'; 

const store = configureStore({
  reducer: {
    myReducer: reducerSlice,

  },
});
export default store;

