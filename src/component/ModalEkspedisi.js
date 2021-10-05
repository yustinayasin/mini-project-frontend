import { useSelector, useDispatch } from 'react-redux';
import { setIsModalPaymentOpen, setIsModalEkspedisiOpen, setIsKemejaKeranjangOpen } from '../app/keranjangSlice';
import { FaArrowLeft } from "react-icons/fa";
import '../styles/ModalEkspedisi.scss';

export default function ModalEkspedisi({setEkspedisi}) {
    const isModalEkspedisiOpen = useSelector((state) => state.keranjangRed.isModalEkspedisiOpen);
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(setIsModalEkspedisiOpen({modalekspedisi: false}));
        dispatch(setIsKemejaKeranjangOpen({modal: true}));
    }

    const pickEkspedisi = (e) => {
        setEkspedisi(e.target.value);
        dispatch(setIsModalPaymentOpen({modalpayment: true}));
        dispatch(setIsModalEkspedisiOpen({modalekspedisi: false}));
    }

    return(
        <div className={isModalEkspedisiOpen ? "modal-ekspedisi-wrapper active" : "modal-ekspedisi-wrapper"}>
            <div className="modal-ekspedisi">
                <button className="btn-back" onClick={handleBack}>
                    <FaArrowLeft />
                </button>
                <p className="modal-title">Pick Shipment:</p>
                <button className="btn-ekspedisi">
                    <input type="checkbox" value="SICEPAT" onClick={(e) => pickEkspedisi(e)}/>
                    <span className="ekspedisi">SICEPAT</span>
                </button>
                <button className="btn-ekspedisi">
                    <input type="checkbox" value="JNE" onClick={(e) => pickEkspedisi(e)}/>
                    <span className="ekspedisi">JNE</span>
                </button>
                <button className="btn-ekspedisi">
                    <input type="checkbox" value="JnT" onClick={(e) => pickEkspedisi(e)}/>
                    <span className="ekspedisi">JnT</span>
                </button>
            </div>
        </div>
    );
}