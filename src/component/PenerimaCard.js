import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import '../styles/PenerimaCard.scss';

export default function PenerimaCard() {
    return(
        <div className="penerima">
            <button className="penerima__checked">
                <FaRegCircle />
            </button>
            <div className="penerima__content">
                <p>Yustina Yasin</p>
                <p>RT 002/RW 001 Dusun Klumprit</p>
                <p>Magelang, Candimulyo, Indonesia</p>
                <p>yustinayasin@gmail.com</p>
            </div>
            <div className="penerima__btn__wrapper">
                <button className="penerima__btn__deliver penerima__btn">Deliver to this address</button>
                <button className="penerima__btn__edit penerima__btn">Edit</button>
                <button className="penerima__btn__remove penerima__btn">Remove</button>
            </div>
        </div>
    );
}