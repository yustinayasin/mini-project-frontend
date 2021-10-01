import alien from '../images/alien.png';
import { Link } from "react-router-dom";
import '../css/NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={alien} alt="alien"/>
            <h2>Ops! Something went wrong!</h2>
            <Link to="/">
                <button className="back-to-home">Back To Home</button>
            </Link>
        </div>
    );
}

export default NotFound;