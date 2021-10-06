import { useSelector, useDispatch } from 'react-redux';
import { setIsModalQuantityOpen } from '../app/keranjangSlice';
import { FaArrowLeft } from "react-icons/fa";
// import { CgClose } from "react-icons/cg";
import '../styles/ModalQuantity.scss';
import { useState } from 'react';

export default function ModalSize({dataCheckKeranjang, size, insertKemejaKeranjangFunction}) {
    const isModalQuantityOpen = useSelector((state) => state.keranjangRed.isModalQuantityOpen);
    const item = useSelector((state) => state.itemRed.item);
    const dispatch = useDispatch();

    const addToBag = (e) => {
        if(item['stock_'+size]>=e.target.value) {
            insertKemejaKeranjangFunction({variables: {'id_keranjang': dataCheckKeranjang.keranjang[0].id,'id_kemeja': item.id, 'jumlah': e.target.value, 'size': size}});
            alert('Item successfully added to cart!');
        }
    }

    return(
        <div className={isModalQuantityOpen ? "modal-quantity-wrapper active" : "modal-quantity-wrapper"}>
            <div className="modal-quantity">
                <button className="btn-back" onClick={() => dispatch(setIsModalQuantityOpen({modalquantity: false}))}>
                    <FaArrowLeft />
                </button>
                <p className="modal-title">Pick Quantity:</p>
                <button className="btn-quantity" >
                    <input type="checkbox" value='1' onClick={(e) => addToBag(e)}/>
                    <span className="size">1</span>
                    <span className="stock">{(item['stock_'+size]>=1) ? "In Stock" : "Out Of Stock"}</span>
                </button>
                <button className="btn-quantity" >
                    <input type="checkbox" value='2' onClick={(e) => addToBag(e)}/>
                    <span className="size">2</span>
                    <span className="stock">{(item['stock_'+size]>=2) ? "In Stock" : "Out Of Stock"}</span>
                </button>
                <button className="btn-quantity" >
                    <input type="checkbox" value='3' onClick={(e) => addToBag(e)}/>
                    <span className="size">3</span>
                    <span className="stock">{(item['stock_'+size]>=3) ? "In Stock" : "Out Of Stock"}</span>
                </button>
                <button className="btn-quantity" >
                    <input type="checkbox" value='4' onClick={(e) => addToBag(e)}/>
                    <span className="size">4</span>
                    <span className="stock">{(item['stock_'+size]>=4) ? "In Stock" : "Out Of Stock"}</span>
                </button>
                <button className="btn-quantity" >
                    <input type="checkbox" value='5' onClick={(e) => addToBag(e)}/>
                    <span className="size">5</span>
                    <span className="stock">{(item['stock_'+size]>=5) ? "In Stock" : "Out Of Stock"}</span>
                </button>
            </div>
        </div>
    );
}