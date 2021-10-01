import { configureStore } from '@reduxjs/toolkit'
import keranjangReducer from './keranjangSlice';
import itemReducer from './itemSlice';
import navbarReducer from './navbarSlice';

export const store = configureStore({
  reducer: {
    keranjangRed: keranjangReducer,
    itemRed: itemReducer,
    navbarRed: navbarReducer
  },
})