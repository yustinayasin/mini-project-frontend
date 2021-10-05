import about1 from '../images/about-1.jpg';
import about2 from '../images/about-2.jpg';
import about3 from '../images/about-3.jpg';
import ModalKeranjang from '../component/ModalKeranjang';
import useInsertKeranjang from '../hooks/useAddKeranjang';
import useDeleteKeranjang from '../hooks/useDeleteKeranjang';
import useEditKeranjang from '../hooks/useEditKeranjang';
import useSubscribeKeranjang from '../hooks/useSubscribeKeranjang';
import ModalSize from '../component/ModalSize';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../styles/AboutUs.scss';

export default function AboutUs() {
    const {dataKeranjang, loadingKeranjang} = useSubscribeKeranjang();
    const {insertKeranjang, loadingInsert} = useInsertKeranjang();
    const {deleteKeranjang, loadingDelete} = useDeleteKeranjang();
    const {editKeranjang, loadingEdit} = useEditKeranjang();

    return(
        <div className="about-us">
            <Navbar/>
            <div className="about">
                <div className="image-wrapper">
                    <img src={about1} alt="about-1" className="about-1"/>
                    <img src={about2} alt="about-2" className="about-2"/>
                    <img src={about3} alt="about-3" className="about-3"/>
                </div>
                <p className="about-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur, veritatis mollitia sit nihil officiis atque iure porro, ab qui impedit dolores velit magnam esse dolorum magni hic. Iste, assumenda!
                </p>
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