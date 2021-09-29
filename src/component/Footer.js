import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import '../css/Footer.css';

export default function footer() {
    return(
        <footer>
            <div className="about">
                <h3 className="brand-name">Kemejaku</h3>
                <p className="address">
                    Jalan Ikhlas No 14, Kecamatan Magelang
                    Tengah, Kota Magelang, Jawa Tengah
                </p>
                <p className="phone-number">(022) 564 731 34</p>
            </div>
            <ul className="sub-menu">
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">ABOUT US</a>
                </li>
                <li>
                    <a href="#">HOW TO ORDER</a>
                </li>
                <li>
                    <a href="#">CONTACT US</a>
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