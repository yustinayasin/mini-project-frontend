import { FaShoppingBag, FaTruck } from "react-icons/fa";
import ItemKeranjang from "./ItemKeranjang";
import '../css/ModalKeranjang.css';

export default function ModalKeranjang({setIsModalOpen, isModalOpen}) {
    return(
        <div className={isModalOpen ? "modal-keranjang-wrapper active" : "modal-keranjang-wrapper"}>
            <div className="modal-keranjang">
                <div className="title-wrapper">
                    <FaShoppingBag />
                    <span>My Bag (3)</span>
                </div>
                <div className="items-wrapper">
                    <ItemKeranjang />
                    <ItemKeranjang />
                </div>
                <div className="total-price">
                    <span>Total Product Price</span>
                    <span>Rp 518.000</span>
                </div>
                <button className="btn btn-continue" onClick={() => setIsModalOpen(false)}>Continue Shopping</button>
                <button className="btn btn-order">Order Now <FaTruck/></button>
            </div>

        </div>
    );
}