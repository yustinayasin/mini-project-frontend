import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNavOpen: false
}

const navbarReducer = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setIsNavOpen: (state, action) => {
      return {
        ...state, 
        isNavOpen: action.payload.isNavOpen};
    }
  },
})


export const { setIsNavOpen } = navbarReducer.actions

export default navbarReducer.reducer