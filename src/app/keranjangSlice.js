import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalKeranjangOpen: false,
  isModalSizeOpen: false,
  isModalQuantityOpen: false,
  isModalConfirmOpen: false,
  isFormCheckoutOpen: false,
  isModalEkspedisiOpen: false,
  isModalPaymentOpen: false,
  isModalAddressOpen: false,
  isModalChangeAddressOpen: false,
  isKeranjangEdit: false,
  keranjangEdit: {
    id_keranjang: null,
    id_kemeja: null,
    jumlah: null,
    size: ''
  }
}

const keranjangReducer = createSlice({
  name: 'isModalKeranjangOpen',
  initialState,
  reducers: {
    setIsKemejaKeranjangOpen: (state, action) => {
      return {
        ...state, 
        isModalKeranjangOpen: action.payload.modal};
    },
    setIsModalSizeOpen: (state, action) => {
      return {
        ...state, 
        isModalSizeOpen: action.payload.modalsize};
    },
    setIsModalQuantityOpen: (state, action) => {
      return {
        ...state, 
        isModalQuantityOpen: action.payload.modalquantity};
    },
    setIsModalConfirmOpen: (state, action) => {
      return {
        ...state, 
        isModalConfirmOpen: action.payload.modalconfirm};
    },
    setIsFormCheckoutOpen: (state, action) => {
      return {
        ...state, 
        isFormCheckoutOpen: action.payload.formcheckout};
    },
    setIsModalChangeAddressOpen: (state, action) => {
      console.log('masuk');
      return {
        ...state, 
        isModalChangeAddressOpen: action.payload.modalchangeaddress};
    },
    setIsModalEkspedisiOpen: (state, action) => {
      return {
        ...state, 
        isModalEkspedisiOpen: action.payload.modalekspedisi};
    },
    setIsModalAddressOpen: (state, action) => {
      return {
        ...state, 
        isModalAddressOpen: action.payload.modaladdress};
    },
    setIsModalPaymentOpen: (state, action) => {
      return {
        ...state, 
        isModalPaymentOpen: action.payload.modalpayment};
    },
    setIsKeranjangEdit: (state, action) => {
      return {
        ...state,
        isKeranjangEdit: action.payload.isKeranjangEdit
      }
    },
    setKeranjangEdit: (state, action) => {
      return {
        ...state,
        keranjangEdit: {
          id_keranjang: action.payload.id_keranjang,
          id_kemeja: action.payload.id_kemeja,
          jumlah: action.payload.jumlah,
          size: action.payload.size
        }
      }
    }
  },
})


export const { setIsKemejaKeranjangOpen, setIsModalChangeAddressOpen, setIsModalAddressOpen, setIsModalEkspedisiOpen, setIsModalPaymentOpen, setIsModalSizeOpen, setIsModalQuantityOpen, setIsModalConfirmOpen, setIsFormCheckoutOpen, setKeranjangEdit, setIsKeranjangEdit } = keranjangReducer.actions

export default keranjangReducer.reducer