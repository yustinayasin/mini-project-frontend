import '../css/ProductCard.css';
import photoProduct from '../photoproducts';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalSizeOpen } from '../app/keranjangSlice';
import { setItem } from '../app/itemSlice';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function ProductCard ({data}) {
    const isModalSizeOpen = useSelector((state) => state.keranjangRed.isModalSizeOpen);
    const isModalQuantityOpen = useSelector((state) => state.keranjangRed.isModalQuantityOpen);
    const item = useSelector((state) => state.itemRed.item);
    const dispatch = useDispatch();
    const [data2, setData2] = useState([]);
    const [isSale, setIsSale] = useState(false);

    useEffect(() => {
        if(data.kemeja) {
            const newData = data?.kemeja.slice(data.kemeja.length-6, data.kemeja.length);
            setData2(newData);
        } else {
            setIsSale(true);
            setData2(data?.sale);
        }
    }, [])

    const addToBag = (item) => {
        dispatch(setItem({item: item}));
        dispatch(setIsModalSizeOpen({modalsize: true}));
    }

    // const convertHarga = (harga) => {
        
    // }

    return(
        <>
        {
            data2.map((item) => {
                return(
                    <div className="product-card" key={item.id}>
                        <Link 
                            to={{
                            pathname: "/details",
                            item: item
                            }}
                        > 
                            <img src={isSale ? photoProduct[item.id_kemeja-1]: photoProduct[item.id-1]} alt="product-image"/>
                            <p className="harga">Rp {isSale ? item.kemeja.harga : item.harga}</p>
                            <p className="product-name">{isSale ? item.kemeja.nama : item.nama}</p>
                        </Link>
                        <button className="btn btn-bag" onClick={() => addToBag(item)}>Add To Bag</button>
                    </div>
                );
            })
        }
        </>
    );
}