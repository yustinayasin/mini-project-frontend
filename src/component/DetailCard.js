import { FaCheck }  from "react-icons/fa";
import '../css/DetailCard.css';
import photoProduct from '../photoproducts';
import { useDispatch } from 'react-redux';
import { setIsModalSizeOpen } from '../app/keranjangSlice';
import { setItem } from '../app/itemSlice';
import { CgClose } from "react-icons/cg";
import { useState } from 'react';

export default function DetailCard({item}) {
    const dispatch = useDispatch();

    const addToBag = (item) => {
        dispatch(setItem({item: item}));
        dispatch(setIsModalSizeOpen({modalsize: true}));
    }

    return ( 
        <div className="detail-card">
            <img src={photoProduct[item.id-1]} alt="product-foto" />
            <div className="details">
                <p className="product-name">{item.nama}</p>
                <div className="product-price">Rp {item.harga}</div>
                <div className="stock-info">
                    {
                        (item.stock_S+item.stock_M+item.stock_L>0) ?
                        <FaCheck /> :
                        <CgClose />
                    }
                    <span>
                        {
                            (item.stock_S+item.stock_M+item.stock_L>0) ?
                            "In Stock" : "Out Of Stock"
                        }
                    </span>
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
                    <span className="quantity">TOTAL QUANTITY</span>
                    <div className="total">
                        <span>{item.stock_S+item.stock_M+item.stock_L}</span>
                    </div>
                </div>
                <button className="btn btn-add" onClick={() => addToBag(item)}>Add To Bag</button>
            </div>
        </div>
    );
}