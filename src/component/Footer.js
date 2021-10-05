import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import '../styles/Footer.scss';
import { Link } from "react-router-dom";

export default function footer() {
    return(
        <footer>
            <div className="about-footer">
                <h3 className="brand-name">Kemejaku</h3>
                <p className="address">
                    Jalan Ikhlas No 14, Kecamatan Magelang
                    Tengah, Kota Magelang, Jawa Tengah
                </p>
                <p className="phone-number">(022) 564 731 34</p>
            </div>
            <ul className="sub-menu">
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/about-us">ABOUT US</Link>
                </li>
                <li>
                    <Link to="/how-to-order">HOW TO ORDER</Link>
                </li>
                <li>
                    <Link to="/contact-us">CONTACT US</Link>
                </li>
            </ul>
            <div className="social-media">
                <FaFacebookSquare className="sosmed fb"/>
                <FaTwitterSquare className="sosmed twitter"/>
                <FaInstagram className="sosmed ig"/>
            </div>
            <div className="copyright">
                Copyright © 2021 KEMEJAKU. All rights reserved.
            </div>
        </footer>
    );
}