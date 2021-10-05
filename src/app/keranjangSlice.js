import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalKeranjangOpen: false,
  isModalSizeOpen: false,
  isModalQuantityOpen: false,
  isModalDeliveryOpen: false,
  isFormCheckoutOpen: false,
  isModalEkspedisiOpen: false,
  isModalPaymentOpen: false,
  isKeranjangEdit: false,
  keranjangEdit: {
    id: null,
    id_kemeja: null,
    jumlah: null,
    size: '',
    pembelian_id: null
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
    setIsModalDeliveryOpen: (state, action) => {
      return {
        ...state, 
        isModalDeliveryOpen: action.payload.modaldelivery};
    },
    setIsFormCheckoutOpen: (state, action) => {
      return {
        ...state, 
        isFormCheckoutOpen: action.payload.formcheckout};
    },
    setIsModalEkspedisiOpen: (state, action) => {
      return {
        ...state, 
        isModalEkspedisiOpen: action.payload.modalekspedisi};
    },
    setIsModalPaymentOpen: (state, action) => {
      console.log('masuk');
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
          id: action.payload.id,
          id_kemeja: action.payload.id_kemeja,
          jumlah: action.payload.jumlah,
          size: action.payload.size,
          pembelian_id: action.payload.pembelian_id
        }
      }
    }
  },
})


export const { setIsKemejaKeranjangOpen, setIsModalEkspedisiOpen, setIsModalPaymentOpen, setIsModalSizeOpen, setIsModalQuantityOpen, setIsModalDeliveryOpen, setIsFormCheckoutOpen, setKeranjangEdit, setIsKeranjangEdit } = keranjangReducer.actions

export default keranjangReducer.reducer