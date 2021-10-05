import { FaArrowLeft } from "react-icons/fa";
import { setIsKemejaKeranjangOpen, setIsModalDeliveryOpen } from '../app/keranjangSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/ModalDelivery.scss';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ModalDelivery() {
    const data = useLocation();
    const isModalDeliveryOpen = useSelector((state) => state.keranjangRed.isModalDeliveryOpen);
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(setIsModalDeliveryOpen({modaldelivery: false}));
        dispatch(setIsKemejaKeranjangOpen({modal: true}));
    } 

    return(
        <div className={isModalDeliveryOpen ? "delivery active" : "delivery"}>
            <div className="delivery__wrapper">
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
                </div>
                <button className="delivery__btn delivery__change">Change Delivery Address</button>
                <button className="delivery__btn delivery__continue">Continue</button>
            </div>
        </div>
    );
}