import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {
      id: '',
      nama: '',
      deskripsi: '',
      harga: null,
      stock_l: null,
      stock_s: null,
      stock_m: null,
      best_seller: false
  }
}

const itemReducer = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, action) => {
      return {
        ...state, 
        item: action.payload.item};
    }
  },
})


export const { setItem } = itemReducer.actions

export default itemReducer.reducer