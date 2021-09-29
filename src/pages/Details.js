import DetailCard from '../component/DetailCard';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../css/Details.css';
import { useLocation } from "react-router-dom";

function Details() {
  const kemeja = useLocation();

  return (
    <div className="details">
      <Navbar />
      <DetailCard item={kemeja.item}/>
      <Footer/>
    </div>
  );
}

export default Details;
