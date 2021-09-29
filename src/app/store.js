import { configureStore } from '@reduxjs/toolkit'
import kemejaReducer from './kemejaSlice';

export const store = configureStore({
  reducer: {
    kemejaRed: kemejaReducer,
  },
})