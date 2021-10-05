import { useSelector, useDispatch } from 'react-redux';
import { setIsModalEkspedisiOpen, setIsFormCheckoutOpen, setIsModalPaymentOpen } from '../app/keranjangSlice';
import { FaArrowLeft } from "react-icons/fa";
import '../styles/ModalPayment.scss';
import { useState, useEffect } from 'react';
import FormCheckout from './FormCheckout';

export default function ModalPayment({totalPrice, ekspedisi}) {
    const isFormCheckoutOpen = useSelector((state) => state.keranjangRed.isFormCheckoutOpen);
    const isModalPaymentOpen = useSelector((state) => state.keranjangRed.isModalPaymentOpen);
    const dispatch = useDispatch();
    const [payment, setPayment] = useState('');

    const handleBack = () => {
        dispatch(setIsModalPaymentOpen({modalpayment: false}));
        dispatch(setIsModalEkspedisiOpen({modalekspedisi: true}));
    }

    const pickPayment = (e) => {
        setPayment(e.target.value);
        dispatch(setIsModalPaymentOpen({modalpayment: false}));
        dispatch(setIsFormCheckoutOpen({formcheckout: true}));
    }

    return(
        <>
        {
            !isFormCheckoutOpen?
            <div className={isModalPaymentOpen ? "modal-payment-wrapper active" : "modal-payment-wrapper"}>
                <div className="modal-payment">
                    <button className="btn-back" onClick={handleBack}>
                        <FaArrowLeft />
                    </button>
                    <p className="modal-title">Pick Payment:</p>
                    <button className="btn-payment">
                        <input type="checkbox" value="BCA" onClick={(e) => pickPayment(e)}/>
                        <span>BCA</span>
                        <span>08763839300</span>
                    </button>
                    <button className="btn-payment">
                        <input type="checkbox" value="Mandiri" onClick={(e) => pickPayment(e)}/>
                        <span>Mandiri</span>
                        <span>08763839300</span>
                    </button>
                    <button className="btn-payment">
                        <input type="checkbox" value="BRI" onClick={(e) => pickPayment(e)}/>
                        <span>BRI</span>
                        <span>08763839300</span>
                    </button>
                </div>
            </div>
            :
            <FormCheckout totalPrice={totalPrice} ekspedisi={ekspedisi} payment={payment} />
        }
        </>
    );
}