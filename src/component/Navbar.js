import { FaShoppingBag, FaBars, FaUserCircle } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import '../styles/Navbar.scss';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setIsKemejaKeranjangOpen } from '../app/keranjangSlice';
import { setIsNavOpen } from '../app/navbarSlice';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const isNavOpen = useSelector((state) => state.navbarRed.isNavOpen);
    const dispatch = useDispatch();
    const [user, loading, error] = useAuthState(auth);
    const [isAccountOpen, setIsAccountOpen] = useState(false);

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
                    <div className="btn-right">
                        <button className="shopping-bag" onClick={() => dispatch(setIsKemejaKeranjangOpen({modal: true}))}>
                            <FaShoppingBag className="shopping-icon"/>
                        </button>
                        {
                            user ?
                            <div className="account">
                                <FaUserCircle className="account-icon" onClick={() => setIsAccountOpen(!isAccountOpen)}/>
                                <div className={isAccountOpen ? "active" : ""}>
                                    <div className={isAccountOpen ? "active segitiga" : "segitiga"}></div>
                                    <a className="btn-account">My Account</a> 
                                    <button className="btn-logout" onClick={logout}>Logout</button> 
                                </div> 
                            </div>
                            :
                            <Link to="/login" className="btn btn-login">Login</Link>
                        }
                    </div>
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