import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalKeranjangOpen: false
}

const kemejaSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setIsKemejaKeranjangOpen: (state, action) => {
      return {
        ...state, 
        isModalKeranjangOpen: !action.payload.modal};
    }
  },
})


export const { setIsKemejaKeranjangOpen } = kemejaSlice.actions

export default kemejaSlice.reducer