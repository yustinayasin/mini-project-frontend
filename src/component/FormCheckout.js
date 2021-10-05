import { useSelector, useDispatch } from 'react-redux';
import { setIsModalConfirmOpen, setIsModalPaymentOpen, setIsFormCheckoutOpen } from '../app/keranjangSlice';
import { FaArrowLeft } from "react-icons/fa";
import '../styles/FormCheckout.scss';
import { useHistory } from "react-router-dom";

export default function FormCheckout({dataDiri, setDataDiri, payment, ekspedisi, totalPrice, dataKeranjang}) {
    const isFormCheckoutOpen = useSelector((state) => state.keranjangRed.isFormCheckoutOpen);
    const dispatch = useDispatch();
    const pembelian = useHistory();

    const handleBack = () => {
        dispatch(setIsFormCheckoutOpen({formcheckout: false}));
        dispatch(setIsModalPaymentOpen({modalpayment: true}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setIsFormCheckoutOpen({formcheckout: false}));
        pembelian.push({
            pathname: "/confirm-checkout",
            data: dataDiri,
            payment: payment,
            ekspedisi: ekspedisi,
            totalPrice: totalPrice,
            dataKeranjang: dataKeranjang?.keranjang
          });
        // dispatch(setIsModalConfirmOpen({modalconfirm: true}));
        // setDataDiri({
        //     fullname: '',
        //     email: '',
        //     phone: '',
        //     address: '',
        //     street: '',
        //     postalCode: ''
        // })
    }

    return(
        <div className={isFormCheckoutOpen ? "form-checkout-wrapper active" : "form-checkout-wrapper"}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button className="btn-back" onClick={handleBack}>
                    <FaArrowLeft />
                </button>
                <p className="form-title">Detail Receiver</p>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name="fullname" onChange={(e) => setDataDiri({...dataDiri, fullname: e.target.value})}/>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" onChange={(e) => setDataDiri({...dataDiri, phone: e.target.value})}/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={(e) => setDataDiri({...dataDiri, email: e.target.value})}/>
                <label htmlFor="street">Street</label>
                <input type="text" name="street" onChange={(e) => setDataDiri({...dataDiri, street: e.target.value})}/>
                <label htmlFor="address">Address</label>
                <textarea type="text" name="address" rows="4" onChange={(e) => setDataDiri({...dataDiri, address: e.target.value})}/>
                <label htmlFor="postal-code">Postal Code</label>
                <input type="text" name="postal-code" onChange={(e) => setDataDiri({...dataDiri, postalCode: e.target.value})}/>
                <button className="btn-continue" type="submit">Submit</button>
            </form>
        </div>
    );
}