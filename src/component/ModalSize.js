import { useSelector, useDispatch } from 'react-redux';
import { setIsModalSizeOpen, setIsModalQuantityOpen, setIsKeranjangEdit } from '../app/keranjangSlice';
import { FaArrowLeft } from "react-icons/fa";
// import { CgClose } from "react-icons/cg";
import '../styles/ModalSize.scss';
import ModalQuantity from '../component/ModalQuantity';
import { useState, useEffect } from 'react';

export default function ModalSize({dataCheckKeranjang, insertKemejaKeranjangFunction, editKemejaKeranjang}) {
    
    const isModalSizeOpen = useSelector((state) => state.keranjangRed.isModalSizeOpen);
    const isKeranjangEdit = useSelector((state) => state.keranjangRed.isKeranjangEdit);
    const keranjangEdit = useSelector((state) => state.keranjangRed.keranjangEdit);
    const isModalQuantityOpen = useSelector((state) => state.keranjangRed.isModalQuantityOpen);
    const item = useSelector((state) => state.itemRed.item);
    const dispatch = useDispatch();

    const [size, setSize] = useState('S');

    const pickQuantity = (e) => {
        if(item['stock_'+e.target.value]>0) {
            setSize(e.target.value);
            dispatch(setIsModalSizeOpen({modalsize: false}));
            dispatch(setIsModalQuantityOpen({modalquantity: true}));
        }
    }

    const editSize = (e) => {
        if(item['stock_'+e.target.value]>0) {
            dispatch(setIsKeranjangEdit({isKeranjangEdit: false}));
            editKemejaKeranjang({variables: {id_keranjang: keranjangEdit.id_keranjang, id_kemeja: keranjangEdit.id_kemeja, jumlah: keranjangEdit.jumlah, size: e.target.value}});
            dispatch(setIsModalSizeOpen({modalsize: false}));
        }
    }

    return(
        <>
        {
            !isModalQuantityOpen ? 
            <div className={isModalSizeOpen ? "modal-size-wrapper active" : "modal-size-wrapper"}>
                <div className="modal-size">
                    <button className="btn-back" onClick={() => dispatch(setIsModalSizeOpen({modalsize: false}))}>
                        <FaArrowLeft />
                    </button>
                    <p className="modal-title">Pick Size:</p>
                    <button className="btn-size">
                        <input type="checkbox" value="S" onClick={(e) => isKeranjangEdit ? editSize(e) : pickQuantity(e)}/>
                        <span className="size">S</span>
                        <span className="stock">{(item.stock_S>0) ? "In Stock" : "Out Of Stock"}</span>
                    </button>
                    <button className="btn-size">
                        <input type="checkbox" value="M" onClick={(e) => isKeranjangEdit ? editSize(e) : pickQuantity(e)}/>
                        <span className="size">M</span>
                        <span className="stock">{(item.stock_M>0) ? "In Stock" : "Out Of Stock"}</span>
                    </button>
                    <button className="btn-size">
                        <input type="checkbox" value="L" onClick={(e) => isKeranjangEdit ? editSize(e) : pickQuantity(e)}/>
                        <span className="size">L</span>
                        <span className="stock">{(item.stock_L>0) ? "In Stock" : "Out Of Stock"}</span>
                    </button>
                </div>
            </div>
            :
            <ModalQuantity dataCheckKeranjang={dataCheckKeranjang} size={size} insertKemejaKeranjangFunction={insertKemejaKeranjangFunction}/>
        }
        </>
    );
}