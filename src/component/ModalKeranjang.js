import { FaShoppingBag, FaTruck } from "react-icons/fa";
import ItemKeranjang from "./ItemKeranjang";
import '../css/ModalKeranjang.css';
import { useSelector, useDispatch } from 'react-redux';
import { setIsKemejaKeranjangOpen } from '../app/keranjangSlice';
import { useEffect, useState } from 'react';

export default function ModalKeranjang({dataKeranjang, deleteKeranjang, editKeranjang}) {
    const isModalKeranjangOpen = useSelector((state) => state.keranjangRed.isModalKeranjangOpen);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total=0;
        dataKeranjang?.keranjang.forEach((item) => {
            total=total+item.kemeja.harga*item.jumlah;
        })
        setTotalPrice(total);
    }, [dataKeranjang]);

    return(
        <div className={isModalKeranjangOpen ? "modal-keranjang-wrapper active" : "modal-keranjang-wrapper"}>
            <div className="modal-keranjang">
                <div className="title-wrapper">
                    <FaShoppingBag />
                    <span>My Bag ({dataKeranjang?.keranjang.length})</span>
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
                <button className="btn btn-order">Order Now <FaTruck/></button>
            </div>

        </div>
    );
}