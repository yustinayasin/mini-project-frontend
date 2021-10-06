import { useSelector, useDispatch } from 'react-redux';
import { setIsModalConfirmOpen, setIsModalPaymentOpen, setIsFormCheckoutOpen } from '../app/keranjangSlice';
import { FaArrowLeft } from "react-icons/fa";
import '../styles/FormCheckout.scss';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function FormCheckout({isUser, dataUser, editUser}) {
    const isFormCheckoutOpen = useSelector((state) => state.keranjangRed.isFormCheckoutOpen);
    const dispatch = useDispatch();
    const [dataDiri, setDataDiri] = useState({
        fullname: '',
        email: '',
        phone: '',
        address: '',
        street: '',
        postalCode: ''
    })

    useEffect(() => {
        if(dataUser) {
            setDataDiri({
                fullname: dataUser.nama_panjang,
                email: dataUser.email,
                phone: dataUser.nomor_telepon,
                address: dataUser.alamat,
                street: dataUser.jalan,
                postalCode: dataUser.kode_pos
            });
        }
        console.log(dataDiri);
    }, []);

    const handleBack = () => {
        dispatch(setIsFormCheckoutOpen({formcheckout: false}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser({
            variables: {
                id: dataUser.id, 
                nama_panjang: dataDiri.fullname, 
                email: dataDiri.email,
                nomor_telepon: dataDiri.phone,
                jalan: dataDiri.street,
                alamat: dataDiri.address,
                kode_pos: dataDiri.postalCode
            }
        })
        dispatch(setIsFormCheckoutOpen({formcheckout: false}));
        // dispatch(setIsModalConfirmOpen({modalconfirm: true}));
        // setDataDiri({
        //     fullname: '',
        //     email: '',
        //     phone: '',
        //     address: '',
        //     street: '',
        //     postalCode: ''
        // })
    }

    return(
        <div className={isFormCheckoutOpen ? "form-checkout-wrapper active" : "form-checkout-wrapper"}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button className="btn-back" onClick={handleBack}>
                    <FaArrowLeft />
                </button>
                <p className="form-title">Detail Receiver</p>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name="fullname" value={dataDiri.fullname} onChange={(e) => setDataDiri({...dataDiri, fullname: e.target.value})}/>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" value={dataDiri.phone} onChange={(e) => setDataDiri({...dataDiri, phone: e.target.value})}/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={dataDiri.email} onChange={(e) => setDataDiri({...dataDiri, email: e.target.value})}/>
                <label htmlFor="street">Street</label>
                <input type="text" name="street" value={dataDiri.street} onChange={(e) => setDataDiri({...dataDiri, street: e.target.value})}/>
                <label htmlFor="address">Address</label>
                <textarea type="text" name="address" rows="4" value={dataDiri.address} onChange={(e) => setDataDiri({...dataDiri, address: e.target.value})}/>
                <label htmlFor="postal-code">Postal Code</label>
                <input type="text" name="postal-code" value={dataDiri.postalCode} onChange={(e) => setDataDiri({...dataDiri, postalCode: e.target.value})}/>
                <button className="btn-continue" type="submit">Submit</button>
            </form>
        </div>
    );
}