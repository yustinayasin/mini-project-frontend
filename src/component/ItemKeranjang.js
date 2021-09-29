import productPhoto from '../images/product-card.jpg';
import { FaTrashAlt } from "react-icons/fa";
import '../css/ItemKeranjang.css';

export default function ItemKeranjang() {
    return (
        <div className="item-keranjang">
            <div className="item">
                <img src={productPhoto} alt="item-photo"/>
                <div className="item-details">
                    <span className="stock">In Stock</span>
                    <span className="item-name">Pure Cotton Oxford Shirt</span>
                    <span className="item-size">M</span>
                    <span className="item-price">Rp 359.000</span>
                </div>
                <item className="action">
                    <div className="input-quantity">
                        <button className="btn-decrease">-</button>
                        <span className="number">1</span>
                        <button className="btn-increase">+</button>
                    </div>
                    <button className="btn-delete">
                        <FaTrashAlt />
                    </button>
                </item>
            </div>
            <span className="line"></span>
        </div>
    );
}