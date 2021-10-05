import { FaTrashAlt } from "react-icons/fa";
import '../styles/ItemKeranjang.scss';
import photoProduct from '../photoproducts';
import { useDispatch } from 'react-redux';
import { setIsKemejaKeranjangOpen, setIsModalSizeOpen, setIsKeranjangEdit, setKeranjangEdit } from '../app/keranjangSlice';

export default function ItemKeranjang({item, deleteKeranjang, editKeranjang}) {
    const dispatch = useDispatch();


    const increaseJumlah = () => {
        editKeranjang({variables: {id: item.id, jumlah: item.jumlah+1, size: item.size}});
    }

    const decreaseJumlah = () => {
        if(item.jumlah!==0){
            editKeranjang({variables: {id: item.id, jumlah: item.jumlah-1, size: item.size}});
        }
    }

    const handleChangeSize = () => {
        dispatch(setIsKeranjangEdit({isKeranjangEdit: true}));
        dispatch(setKeranjangEdit({id: item.id, id_kemeja: item.id_kemeja, jumlah: item.jumlah, size: item.size, pembelian_id: item.pembelian_id}))
        dispatch(setIsKemejaKeranjangOpen({modal: false}));
        dispatch(setIsModalSizeOpen({modalsize: true}));
    }

    return (
        <>
        <div className="item-keranjang">
            <div className="item">
                <img src={photoProduct[item['id_kemeja']-1]} alt="item-photo"/>
                <div className="item-details">
                    <span className="stock">In Stock</span>
                    <span className="item-name">{item.kemeja.nama}</span>
                    <button className="btn-size">
                        <span className="item-size" onClick={handleChangeSize}>{item.size}</span>
                    </button>
                    <span className="item-price">Rp {item.kemeja.harga}</span>
                </div>
                <div className="action">
                    <div className="input-quantity">
                        <button className="btn-decrease" onClick={() => decreaseJumlah()}>-</button>
                        <span className="number">{item.jumlah}</span>
                        <button className="btn-increase" onClick={() => increaseJumlah()}>+</button>
                    </div>
                    <button className="btn-delete" onClick={() => deleteKeranjang({variables: {id: item.id}})}>
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
            <span className="line"></span>
        </div>
        </>
    );
}