import { useState, useEffect } from 'react';
import ModalKeranjang from '../component/ModalKeranjang';
import useAddKemejaKeranjang from '../hooks/useAddKemejaKeranjang';
import useDeleteKemejaKeranjang from '../hooks/useDeleteKemejaKeranjang';
import useEditKemejaKeranjang from '../hooks/useEditKemejaKeranjang';
import useSubscribeCheckKeranjang from '../hooks/useSubscribeCheckKeranjang';
import useGetUser from '../hooks/useGetUser';
import useEditUser from '../hooks/useEditUser';
import ModalSize from '../component/ModalSize';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../styles/ConfirmCheckout.scss';
import { useLocation, useHistory } from "react-router-dom";
import useAddPembelian from '../hooks/useAddPembelian';
import useEditKemeja from '../hooks/useEditKemeja';
import useEditKeranjang from '../hooks/useEditKeranjang';

export default function AboutUs() {
    const [keranjangQuery, setKeranjangQuery] = useState({
        variables: {where: {}}
      });
    
      const [userQuery, setUserQuery] = useState({
        variables: {where: {}}
      });

    const pembelian = useLocation();
    const [user] = useAuthState(auth);
    const {dataUser, loadingUser} = useGetUser(userQuery);
    const {dataCheckKeranjang, loadingCheckKeranjang, errorCheck} = useSubscribeCheckKeranjang(keranjangQuery);
    const {insertKemejaKeranjangFunction, loadingInsertKemejaKeranjang} = useAddKemejaKeranjang();
    const {deleteKemejaKeranjangFunction, loadingKemejaKeranjangDelete} = useDeleteKemejaKeranjang();
    const {editKemejaKeranjang, loadingEditKemejaKeranjang} = useEditKemejaKeranjang();
    const {editUser, loadingEditUser} = useEditUser();
    const {insertPembelianFunction} = useAddPembelian();
    const {editKemeja, loadingEditKemeja} = useEditKemeja();
    const {editKeranjang, loadingEditKeranjang} = useEditKeranjang();
    const history = useHistory();

    useEffect(() => {
        if(user) {
          setUserQuery({
            variables: {
              id: {
                _eq: user.uid
              }
            }
          });
        }
      }, [user]);

      useEffect(() => {
        if(user) {
          console.log(user.uid);
          setKeranjangQuery({
            variables: {
              _eq: user.uid
            }
          });
        }
      }, [user]);

    const handleCheckout = () => {
      editKeranjang({variables: {id: pembelian.dataCheckKeranjang.keranjang[0].id, checked: true}});
      pembelian.dataCheckKeranjang.keranjang[0].kemeja_keranjangs.forEach((item) => {
        if(item.size=='L') {
          editKemeja({variables: {id: item.id_kemeja, _set: {stock_L: item.kemeja['stock_L']-item.jumlah}}});
        } else if(item.size=='M') {
          editKemeja({variables: {id: item.id_kemeja, _set: {stock_M: item.kemeja['stock_M']-item.jumlah}}});
        } else {
          editKemeja({variables: {id: item.id_kemeja, _set: {stock_S: item.kemeja['stock_S']-item.jumlah}}});
        }
      })
      insertPembelianFunction({
        variables: {
          ekspedisi: pembelian.ekspedisi, 
          id_keranjang: pembelian.dataCheckKeranjang.keranjang[0].id,
          payment: pembelian.payment,
          total: pembelian.totalPrice
        }
      })
      alert('Cart has been checked out!');
      history.push('/');
    }
    
    return(
        <div className="confirm-checkout">
            <Navbar/>
            <div className="pembelian">
                <ul className="fullname">
                    <li>Full Name</li>
                    <li>:</li>
                    <li>{pembelian.data.nama_panjang}</li>
                </ul>
                <ul className="phone">
                    <li>Phone Number</li>
                    <li>:</li>
                    <li>{pembelian.data.nomor_telepon}</li>
                </ul>
                <ul className="email">
                    <li>Email</li>
                    <li>:</li>
                    <li>{pembelian.data.email}</li>
                </ul>
                <ul className="street">
                    <li>Street address</li>
                    <li>:</li>
                    <li>{pembelian.data.jalan}</li>
                </ul>
                <ul className="address">
                    <li>Address</li>
                    <li>:</li>
                    <li>{pembelian.data.alamat}</li>
                </ul>
                <ul className="postal">
                    <li>Postal Code</li>
                    <li>:</li>
                    <li>{pembelian.data.kode_pos}</li>
                </ul>
                <ul className="products">
                    <li>Products</li>
                    <li>:</li>
                    <li className="list-products-confirm">
                        {
                            pembelian.dataCheckKeranjang?.keranjang[0]?.kemeja_keranjangs.map((item, index) => {
                                return(
                                    <p key={index}>{item.jumlah} pcs {item.kemeja.nama} {item.size}</p>
                                );
                            })
                        }
                    </li>
                </ul>
                <ul className="total">
                    <li>Total Price</li>
                    <li>:</li>
                    <li>Rp {pembelian.totalPrice}</li>
                </ul>
                <ul className="ekspedisi">
                    <li>Expedition</li>
                    <li>:</li>
                    <li>{pembelian.ekspedisi}</li>
                </ul>
                <ul className="payment">
                    <li>Payment</li>
                    <li>:</li>
                    <li>{pembelian.payment}</li>
                </ul>
                <div className="btn-wrapper">
                    <button className="btn btn-change" onClick={handleCheckout}>Process Checkout</button>
                    {/* <button className="btn btn-continue">Process Checkout</button> */}
                </div>
            </div>
            <ModalKeranjang 
                dataCheckKeranjang={dataCheckKeranjang} 
                deleteKemejaKeranjangFunction={deleteKemejaKeranjangFunction} 
                editKemejaKeranjang={editKemejaKeranjang}
                dataUser={dataUser?.users[0]}
                editUser={editUser}
            />
            <ModalSize 
                insertKemejaKeranjangFunction={insertKemejaKeranjangFunction} 
                editKemejaKeranjang={editKemejaKeranjang}
                dataCheckKeranjang={dataCheckKeranjang}
            />
            <Footer/>
        </div>
    );
}