import { FaShoppingBag, FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import '../styles/Navbar.scss';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setIsKemejaKeranjangOpen } from '../app/keranjangSlice';
import { setIsNavOpen } from '../app/navbarSlice';

export default function Navbar() {
    const isNavOpen = useSelector((state) => state.navbarRed.isNavOpen);
    const dispatch = useDispatch();

    return(
        <div className="navbar">
            <h1 className="brand-name">Kemejaku</h1>
            <div className="menu-wrapper">
                <div className="button-wrapper">
                    <button className="menu-bars" onClick={() => dispatch(setIsNavOpen({isNavOpen: !isNavOpen}))}>
                        {
                            isNavOpen ?
                            <CgClose className="menu-bars-icon"/> :
                            <FaBars className="menu-bars-icon"/>
                        }
                    </button>
                    <button className="shopping-bag" onClick={() => dispatch(setIsKemejaKeranjangOpen({modal: true}))}>
                        <FaShoppingBag className="shopping-icon"/>
                    </button>
                </div>
                <div className={isNavOpen ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/sale">Sale</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about-us">About Us</Link>
                </div>
            </div>
        </div>
    );
}