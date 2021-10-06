import { FaShoppingBag, FaTruck } from "react-icons/fa";
import ItemKeranjang from "./ItemKeranjang";
import '../styles/ModalKeranjang.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setIsKemejaKeranjangOpen, setIsModalAddressOpen } from '../app/keranjangSlice';
import { useEffect, useState } from 'react';
import ModalEkspedisi from "./ModalEkspedisi";
import ModalPayment from "./ModalPayment";
import ModalConfirm from "./ModalConfirm";
import FormCheckout from "./FormCheckout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import ModalAddress from "./ModalAddress";

export default function ModalKeranjang({dataCheckKeranjang, editUser, dataUser, deleteKemejaKeranjangFunction, editKemejaKeranjang}) {
    const isModalAddressOpen = useSelector((state) => state.keranjangRed.isModalAddressOpen);
    const isFormCheckoutOpen = useSelector((state) => state.keranjangRed.isFormCheckoutOpen);
    const isModalPaymentOpen = useSelector((state) => state.keranjangRed.isModalPaymentOpen);
    const isModalKeranjangOpen = useSelector((state) => state.keranjangRed.isModalKeranjangOpen);
    const isModalEkspedisiOpen = useSelector((state) => state.keranjangRed.isModalEkspedisiOpen);
    //const isModalConfirmOpen = useSelector((state) => state.keranjangRed.isModalConfirmOpen);
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, loading, error] = useAuthState(auth);
    const [totalPrice, setTotalPrice] = useState(0);
    const [ekspedisi, setEkspedisi] = useState('');
    const [payment, setPayment] = useState('');
    
    const [idKeranjang, setIdKeranjang] = useState(0);

    useEffect(() => {
        if(dataCheckKeranjang) {
            let total=0;
            dataCheckKeranjang?.keranjang[0]?.kemeja_keranjangs?.forEach((item) => {
                total=total+item.kemeja.harga*item.jumlah;
            })
            setIdKeranjang(dataCheckKeranjang?.keranjang[0]?.id)
            setTotalPrice(total);
        }
    }, [dataCheckKeranjang]);

    const handleCheckout = () => {
        if(user) {
            dispatch(setIsModalAddressOpen({modaladdress: true}));
            dispatch(setIsKemejaKeranjangOpen({modal: false}));
        } else {
            history.replace("/login");
        }
    }

    return(
        <>
        {
            isModalAddressOpen ?
            <ModalAddress dataUser={dataUser} editUser={editUser}/>
            : isModalEkspedisiOpen?
            <ModalEkspedisi setEkspedisi={setEkspedisi}/>
            : isModalPaymentOpen ?
            <ModalPayment dataUser={dataUser} setPayment={setPayment} dataCheckKeranjang={dataCheckKeranjang} payment={payment} ekspedisi={ekspedisi} totalPrice={totalPrice}/>
            : 
            // isFormCheckoutOpen ?
            // <FormCheckout dataCheckKeranjang={dataCheckKeranjang} setDataDiri={setDataDiri} dataDiri={dataDiri} payment={payment} ekspedisi={ekspedisi} totalPrice={totalPrice}/>
            // : 
            // : isModalConfirmOpen ?
            // <ModalConfirm data={dataDiri} payment={payment} ekspedisi={ekspedisi} totalPrice={totalPrice}/> :
            <div className={isModalKeranjangOpen ? "modal-keranjang-wrapper active" : "modal-keranjang-wrapper"}>
                <div className="modal-keranjang">
                    <div className="title-wrapper">
                        <FaShoppingBag />
                        <span>My Bag ({dataCheckKeranjang?.keranjang[0]?.kemeja_keranjangs?.length===0 ? "0" : dataCheckKeranjang?.keranjang.length})</span>
                    </div>
                    <div className="items-wrapper">
                        {
                            dataCheckKeranjang?.keranjang[0]?.kemeja_keranjangs?.map((item, index) => {
                                return(
                                    <ItemKeranjang 
                                        deleteKemejaKeranjangFunction={deleteKemejaKeranjangFunction} 
                                        key={index} 
                                        item={item}
                                        id_keranjang={idKeranjang}
                                        editKemejaKeranjang={editKemejaKeranjang}
                                    />
                                );
                            })
                        }
                    </div>
                    <div className="total-price">
                        <span>Total Product Price</span>
                        <span>Rp {totalPrice}</span>
                    </div>
                    <button 
                        className="btn btn-continue"  
                        onClick={() => dispatch(setIsKemejaKeranjangOpen({modal: false}))}
                    >
                        Continue Shopping
                    </button>
                    <button 
                        className="btn btn-order"
                        onClick={handleCheckout}
                    >
                        Order Now <FaTruck/>
                    </button>
                </div>
            </div>
        }
        </>
    );
}