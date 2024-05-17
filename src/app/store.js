import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import catalogSlice from '../features/catalogSlice';
import ordersSlice from '../features/ordersSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    catalog: catalogSlice,
    orders: ordersSlice
  }
});