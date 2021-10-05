import ModalKeranjang from '../component/ModalKeranjang';
import useInsertKeranjang from '../hooks/useAddKeranjang';
import useDeleteKeranjang from '../hooks/useDeleteKeranjang';
import useEditKeranjang from '../hooks/useEditKeranjang';
import useSubscribeKeranjang from '../hooks/useSubscribeKeranjang';
import ModalSize from '../component/ModalSize';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../styles/ConfirmCheckout.scss';
import { useLocation } from "react-router-dom";

export default function AboutUs() {
    const pembelian = useLocation();
    const {dataKeranjang, loadingKeranjang} = useSubscribeKeranjang();
    const {insertKeranjang, loadingInsert} = useInsertKeranjang();
    const {deleteKeranjang, loadingDelete} = useDeleteKeranjang();
    const {editKeranjang, loadingEdit} = useEditKeranjang();

    return(
        <div className="confirm-checkout">
            <Navbar/>
            <div className="pembelian">
                <ul className="fullname">
                    <li>Full Name</li>
                    <li>:</li>
                    <li>{pembelian.data.fullname}</li>
                </ul>
                <ul className="phone">
                    <li>Phone Number</li>
                    <li>:</li>
                    <li>{pembelian.data.phone}</li>
                </ul>
                <ul className="email">
                    <li>Email</li>
                    <li>:</li>
                    <li>{pembelian.data.email}</li>
                </ul>
                <ul className="street">
                    <li>Street address</li>
                    <li>:</li>
                    <li>{pembelian.data.street}</li>
                </ul>
                <ul className="address">
                    <li>Address</li>
                    <li>:</li>
                    <li>{pembelian.data.address}</li>
                </ul>
                <ul className="postal">
                    <li>Postal Code</li>
                    <li>:</li>
                    <li>{pembelian.data.postalCode}</li>
                </ul>
                <ul className="products">
                    <li>Products</li>
                    <li>:</li>
                    <li class="list-products-confirm">
                        {
                            pembelian.dataKeranjang.map((item, index) => {
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
                {/* <ul>
                    <li>{pembelian.data.fullname}</li>
                    <li>{pembelian.data.phone}</li>
                    <li>{pembelian.data.email}</li>
                    <li>{pembelian.data.street}</li>
                    <li>{pembelian.data.address}</li>
                    <li>{pembelian.data.postalCode}</li>
                    <li>Products</li>
                    <li>{pembelian.totalPrice}</li>
                    <li>{pembelian.ekspedisi}</li>
                    <li>{pembelian.payment}</li>
                </ul> */}
                <div className="btn-wrapper">
                    <button className="btn btn-change">Change Delivery Address</button>
                    <button className="btn btn-continue">Continue</button>
                </div>
            </div>
            <ModalKeranjang 
                dataKeranjang={dataKeranjang} 
                deleteKeranjang={deleteKeranjang} 
                editKeranjang={editKeranjang}
            />
            <ModalSize insertKeranjang={insertKeranjang} editKeranjang={editKeranjang}/>
            <Footer/>
        </div>
    );
}