import DetailCard from '../component/DetailCard';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../css/Details.css';
import { useLocation } from "react-router-dom";
import useDeleteKeranjang from '../hooks/useDeleteKeranjang';
import useInsertKeranjang from '../hooks/useAddKeranjang';
import useEditKeranjang from '../hooks/useEditKeranjang';
import useSubscribeKeranjang from '../hooks/useSubscribeKeranjang';
import ModalKeranjang from '../component/ModalKeranjang';
import ModalSize from '../component/ModalSize';

function Details() {
  const {dataKeranjang, loadingKeranjang} = useSubscribeKeranjang();
  const {insertKeranjang, loadingInsert} = useInsertKeranjang();
  const {deleteKeranjang, loadingDelete} = useDeleteKeranjang();
  const {editKeranjang, loadingEdit} = useEditKeranjang();
  const kemeja = useLocation();

  return (
    <div className="details">
      <Navbar />
      <DetailCard item={kemeja.item}/>
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

export default Details;
