import { FaShoppingBag, FaBars } from "react-icons/fa";
import '../css/Navbar.css';

export default function Navbar({setIsModalOpen}) {
    return(
        <div className="navbar">
            <h1 className="brand-name">Kemejaku</h1>
            <div className="menu-wrapper">
                <div className="menu">
                    <a href="#">Home</a>
                    <a href="#">New Product</a>
                    <a href="#">Sale</a>
                    <a href="#">Shop</a>
                    <a href="#">About Us</a>
                </div>
                <FaBars className="menu-bars"/>
                <button className="shopping-bag" onClick={() => setIsModalOpen(true)}>
                    <FaShoppingBag className="shopping-icon"/>
                </button>
            </div>
        </div>
    );
}