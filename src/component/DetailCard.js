import foto from '../images/product-card.jpg';
import { FaCheck }  from "react-icons/fa";
import '../css/DetailCard.css';
import photoProduct from '../photoproducts';

export default function DetailCard({item}) {
    return (
        <div className="detail-card">
            <img src={photoProduct[item.id-1]} alt="product-foto" />
            <div className="details">
                <p className="product-name">{item.nama}</p>
                <div className="product-price">Rp {item.harga}</div>
                <div className="stock-info">
                    <FaCheck />
                    <span>In Stock</span>
                </div>
                <ul className="description">
                    Description:
                    {
                        item.deskripsi.split('. ').map((item, index) => {
                            return(
                                <li key={index}>{item}</li>
                            );
                        })
                    }
                    {/* <li>Non furing</li>
                    <li>Weight Approximately 470Gr</li>
                    <li>Model height : 173 cm</li>
                    <li>Handcrafted in Bandung</li> */}
                </ul>
                <div className="size-quantity">
                    <span className="size">SIZE</span>
                    <div className="size-chart">
                        <div>
                            <span>S</span>
                        </div>
                        <div>
                            <span>M</span>
                        </div>
                        <div>
                            <span>L</span>
                        </div>
                    </div>
                    <span className="quantity">QUANTITY</span>
                    <div className="input-quantity">
                        <button className="btn-decrease">-</button>
                        <span className="number">1</span>
                        <button className="btn-increase">+</button>
                    </div>
                </div>
                <button className="btn btn-add">Add To Bag</button>
            </div>
        </div>
    );
}