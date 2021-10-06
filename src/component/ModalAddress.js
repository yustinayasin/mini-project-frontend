import { FaArrowLeft } from "react-icons/fa";
import '../styles/ModalAddress.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setIsKemejaKeranjangOpen, setIsFormCheckoutOpen, setIsModalEkspedisiOpen, setIsModalChangeAddressOpen, setIsModalAddressOpen } from '../app/keranjangSlice';
import { useEffect, useState } from 'react';
import ModalChangeAddress from "./ModalChangeAddress";
import FormCheckout from "./FormCheckout";

export default function ModalAddress({dataUser, editUser}) {
    const isModalAddressOpen = useSelector((state) => state.keranjangRed.isModalAddressOpen);
    const isModalChangeAddressOpen = useSelector((state) => state.keranjangRed.isModalChangeAddressOpen);
    const isFormCheckoutOpen = useSelector((state) => state.keranjangRed.isFormCheckoutOpen);
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(setIsModalAddressOpen({modalpayment: false}));
        dispatch(setIsKemejaKeranjangOpen({modal: true}));
    }

    const handleContinue = () => {
        if(!dataUser.alamat || !dataUser.jalan || !dataUser.nomor_telepon || !dataUser.kode_pos || !dataUser.email || !dataUser.nama_panjang) {
            dispatch(setIsFormCheckoutOpen({formcheckout: true}));
        } else {
            dispatch(setIsModalAddressOpen({modaladdress: false}));
            dispatch(setIsModalEkspedisiOpen({modalekspedisi: true}));
        }
    }

    const handleChange = () => {
        dispatch(setIsFormCheckoutOpen({formcheckout: true}));
    }

    return(
        <>
        <div className={isModalAddressOpen ? "modal__address__wrapper active" : "modal__address__wrapper"}>
            <div className="modal__address">
                <button className="modal__address__btn__back" onClick={handleBack}>
                    <FaArrowLeft />
                </button>
                <p className="modal__address__title">Delivery Information:</p>
                <div className="modal__address__card">
                    <p className="nama">{dataUser.nama_panjang}</p>
                    <p>{dataUser.nomor_telepon}</p>
                    <p>{dataUser.jalan}</p>
                    <p>{dataUser.alamat}</p>
                    <p>{dataUser.email}</p>
                </div>
                <button className="modal__address__change btn" onClick={handleChange}>Change delivery address</button>
                <button className="modal__address__continue btn" onClick={handleContinue}>Continue</button>
            </div>
        </div>
        {/* {
            isModalChangeAddressOpen &&
            <ModalChangeAddress />
        } */}
        {
            isFormCheckoutOpen &&
            <FormCheckout dataUser={dataUser} isUser={true} editUser={editUser}/>
        }
        </>
    );
}