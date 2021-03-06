import { useSelector, useDispatch } from 'react-redux';
import { setIsModalEkspedisiOpen, setIsFormCheckoutOpen, setIsModalPaymentOpen } from '../app/keranjangSlice';
import { FaArrowLeft } from "react-icons/fa";
import '../styles/ModalPayment.scss';
import { useHistory } from "react-router-dom";

export default function ModalPayment({dataUser, dataCheckKeranjang, payment, ekspedisi, totalPrice, setPayment}) {
    const isModalPaymentOpen = useSelector((state) => state.keranjangRed.isModalPaymentOpen);
    const dispatch = useDispatch();
    const pembelian = useHistory();

    const handleBack = () => {
        dispatch(setIsModalPaymentOpen({modalpayment: false}));
        dispatch(setIsModalEkspedisiOpen({modalekspedisi: true}));
    }

    const pickPayment = (e) => {
        setPayment(e.target.value);
        dispatch(setIsModalPaymentOpen({modalpayment: false}));
        dispatch(setIsFormCheckoutOpen({formcheckout: true}));
        pembelian.push({
            pathname: "/confirm-checkout",
            data: dataUser,
            dataCheckKeranjang: dataCheckKeranjang,
            payment: e.target.value,
            ekspedisi: ekspedisi,
            totalPrice: totalPrice
          });
    }

    return(
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
    );
}