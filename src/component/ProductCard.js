import '../styles/ProductCard.scss';
import photoProduct from '../photoproducts';
import { useDispatch } from 'react-redux';
import { setIsModalSizeOpen } from '../app/keranjangSlice';
import { setItem } from '../app/itemSlice';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

export default function ProductCard ({data, isShop, insertKeranjangFunction, dataCheckKeranjang}) {
    const dispatch = useDispatch();
    const [data2, setData2] = useState([]);
    const [isSale, setIsSale] = useState(false);
    const history = useHistory();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if(data?.kemeja) {
            if(isShop) {
                setData2(data?.kemeja.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);}));
            } else {
                const newData = data?.kemeja
                                .sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);})
                                .slice(data.kemeja.length-6, data.kemeja.length);
                setData2(newData);
            }
        } else {
            setIsSale(true);
            setData2(data?.sale);
        }
    }, [])

    const addToBag = (item) => {
        if(user) {
            if(dataCheckKeranjang?.keranjang[0]) {
                console.log('ada');
                if(item.kemeja) {
                    dispatch(setItem({item: item.kemeja}));
                } else {
                    dispatch(setItem({item: item}));
                }
                dispatch(setIsModalSizeOpen({modalsize: true}));
            } else {
                console.log('tidak ada');
                insertKeranjangFunction({variables: {'user_id': user.uid}});
                if(item.kemeja) {
                    dispatch(setItem({item: item.kemeja}));
                } else {
                    dispatch(setItem({item: item}));
                }
                dispatch(setIsModalSizeOpen({modalsize: true}));   
            }
        } else {
            history.replace("/login");
        }
    }

    return(
        <>
        {
            data2.map((item) => {
                return(
                    <div className="product-card" key={item.id}>
                        <Link 
                            to={{
                            pathname: `/details/${item.id}`,
                            item: item
                            }}
                        > 
                            <img src={isSale ? photoProduct[item.id_kemeja-1]: photoProduct[item.id-1]} alt="product-image"/>
                            <p className="harga">Rp {isSale ? item.kemeja.harga-(item.kemeja.harga*item.percent/100) : item.harga}</p>
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