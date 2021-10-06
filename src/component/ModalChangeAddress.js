import { FaArrowLeft } from "react-icons/fa";
import '../styles/ModalChangeAddress.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalChangeAddressOpen, setIsFormCheckoutOpen } from '../app/keranjangSlice';
import PenerimaCard from "./PenerimaCard";
import FormCheckout from './FormCheckout';

export default function ModalChangeAddress() {
    const isModalChangeAddressOpen = useSelector((state) => state.keranjangRed.isModalChangeAddressOpen);
    const isFormCheckoutOpen = useSelector((state) => state.keranjangRed.isFormCheckoutOpen);
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(setIsModalChangeAddressOpen({modalchangeaddress: false}));
    }

    const handleAdd = () => {
        dispatch(setIsFormCheckoutOpen({formcheckout: true}));
    }

    return(
        <>
        {
            isFormCheckoutOpen ?
            <FormCheckout isAdd={true}/> :
            <div className={isModalChangeAddressOpen ? "modal__change__wrapper active" : "modal__change__wrapper"}>
                <div className="modal__change">
                    <button className="modal__change__btn__back" onClick={handleBack}>
                        <FaArrowLeft />
                    </button>
                    <p className="modal__change__title">Select Delivery Address:</p>
                    <PenerimaCard />
                    <button className="modal__change__btn" onClick={handleAdd}>Add New Delivery Address</button>
                </div>
            </div>
        }
        </>
    );
}