import '../css/ProductCard.css';
import photoProduct from '../photoproducts';

export default function ProductCard ({item}) {
    return(
        <div className="product-card">
            <img src={photoProduct[item.id-1]} alt="product-image"/>
            <p className="harga">Rp {item.harga}</p>
            <p className="product-name">{item.nama}</p>
            <button className="btn btn-bag">Add To Bag</button>
        </div>
    );
}