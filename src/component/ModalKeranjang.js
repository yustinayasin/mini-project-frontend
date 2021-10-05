import { FaShoppingBag, FaTruck } from "react-icons/fa";
import ItemKeranjang from "./ItemKeranjang";
import '../styles/ModalKeranjang.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setIsKemejaKeranjangOpen, setIsModalEkspedisiOpen } from '../app/keranjangSlice';
import { useEffect, useState } from 'react';
import ModalEkspedisi from "./ModalEkspedisi";
import ModalPayment from "./ModalPayment";
import ModalConfirm from "./ModalConfirm";
import FormCheckout from "./FormCheckout";

export default function ModalKeranjang({dataKeranjang, deleteKeranjang, editKeranjang}) {
    const isFormCheckoutOpen = useSelector((state) => state.keranjangRed.isFormCheckoutOpen);
    const isModalPaymentOpen = useSelector((state) => state.keranjangRed.isModalPaymentOpen);
    const isModalKeranjangOpen = useSelector((state) => state.keranjangRed.isModalKeranjangOpen);
    const isModalEkspedisiOpen = useSelector((state) => state.keranjangRed.isModalEkspedisiOpen);
    const isModalConfirmOpen = useSelector((state) => state.keranjangRed.isModalConfirmOpen);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const [ekspedisi, setEkspedisi] = useState('');
    const [payment, setPayment] = useState('');
    const [dataDiri, setDataDiri] = useState({
        fullname: '',
        email: '',
        phone: '',
        address: '',
        street: '',
        postalCode: ''
    })

    useEffect(() => {
        let total=0;
        dataKeranjang?.keranjang.forEach((item) => {
            total=total+item.kemeja.harga*item.jumlah;
        })
        setTotalPrice(total);
    }, [dataKeranjang]);

    const handleCheckout = () => {
        dispatch(setIsKemejaKeranjangOpen({modal: false}));
        dispatch(setIsModalEkspedisiOpen({modalekspedisi: true}));
    }

    return(
        <>
        {
            isModalEkspedisiOpen?
            <ModalEkspedisi setEkspedisi={setEkspedisi}/>
            : isModalPaymentOpen ?
            <ModalPayment setPayment={setPayment}/>
            : isFormCheckoutOpen ?
            <FormCheckout dataKeranjang={dataKeranjang} setDataDiri={setDataDiri} dataDiri={dataDiri} payment={payment} ekspedisi={ekspedisi} totalPrice={totalPrice}/>
            : 
            // : isModalConfirmOpen ?
            // <ModalConfirm data={dataDiri} payment={payment} ekspedisi={ekspedisi} totalPrice={totalPrice}/> :
            <div className={isModalKeranjangOpen ? "modal-keranjang-wrapper active" : "modal-keranjang-wrapper"}>
                <div className="modal-keranjang">
                    <div className="title-wrapper">
                        <FaShoppingBag />
                        <span>My Bag ({dataKeranjang?.keranjang.length===0 ? "0" : dataKeranjang?.keranjang.length})</span>
                    </div>
                    <div className="items-wrapper">
                        {
                            dataKeranjang?.keranjang.map((item) => {
                                return(
                                    <ItemKeranjang 
                                        deleteKeranjang={deleteKeranjang} 
                                        key={item.id} 
                                        item={item} 
                                        setTotalPrice={setTotalPrice} 
                                        totalPrice={totalPrice}
                                        editKeranjang={editKeranjang}
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