import { FaArrowLeft } from "react-icons/fa";
import { setIsFormCheckoutOpen, setIsModalConfirmOpen } from '../app/keranjangSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/ModalConfirm.scss';

export default function ModalDelivery({data, totalPrice, ekspedisi, payment}) {
    const isModalConfirmOpen = useSelector((state) => state.keranjangRed.isModalConfirmOpen);
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(setIsModalConfirmOpen({modalConfirm: false}));
        dispatch(setIsFormCheckoutOpen({formCheckout: true}));
    } 

    console.log(data);

    return(
        <div className={isModalConfirmOpen ? "delivery active" : "delivery"}>
            <div className="delivery__wrapper" onClick={handleBack}>
                <button className="delivery__back" onClick={handleBack}>
                    <FaArrowLeft />
                </button>
                <p className="delivery__title">Delivery Information</p>
                <div className="delivery__information information">
                    <p className="information__name">{data.fullname}</p>
                    <p className="information__address information_detail">{data.street}</p>
                    <p className="information__address">{data.postalCode} {data.address}</p>
                    <p className="information__phone">{data.phone}</p>
                    <p className="information__email">{data.email}</p>
                    <p className="information__email">Total price: Rp {totalPrice}</p>
                    <p className="information__email">Ekspedisi: {ekspedisi}</p>
                    <p className="information__email">Payment: {payment}</p>
                </div>
                <button className="delivery__btn delivery__change">Change Delivery Address</button>
                <button className="delivery__btn delivery__continue">Continue</button>
            </div>
        </div>
    );
}