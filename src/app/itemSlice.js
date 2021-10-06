import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {
      id: '',
      nama: '',
      deskripsi: '',
      harga: null,
      stock_L: null,
      stock_S: null,
      stock_M: null
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