import Navbar from '../component/Navbar';
import ProductCard from '../component/ProductCard';
import Footer from '../component/Footer';
import welcome from '../images/welcome.jpg';
import '../styles/Home.scss';
import { Link } from "react-router-dom";
import useSubscribeKemeja from '../hooks/useSubscribeKemeja';
import { useState, useEffect } from 'react';
import ModalKeranjang from '../component/ModalKeranjang';
import useInsertKeranjang from '../hooks/useAddKeranjang';
import useDeleteKeranjang from '../hooks/useDeleteKeranjang';
import useEditKeranjang from '../hooks/useEditKeranjang';
import useSubscribeKeranjang from '../hooks/useSubscribeKeranjang';
import ModalSize from '../component/ModalSize';


function Home() {
  const [kemejaGetQuery, setKemejaGetQuery] = useState({
    variables: {where: {}}
  });
  const {data, loading, error} = useSubscribeKemeja(kemejaGetQuery);
  const {dataKeranjang, loadingKeranjang} = useSubscribeKeranjang();
  const {insertKeranjang, loadingInsert} = useInsertKeranjang();
  const {deleteKeranjang, loadingDelete} = useDeleteKeranjang();
  const {editKeranjang, loadingEdit} = useEditKeranjang();

  useEffect(() => {
    setKemejaGetQuery({
      variables: {
        where: {}
      }
    });
  }, []);

  return (
    <div className="home">
      <Navbar/>
      <div className="welcome">
        <img src={welcome} alt="welcome"/>
        <h1 className="tagline">From Personal <br/> To Professional</h1>
        <p className="description">
            We provide the best quality products <br/>
          with premium material. From some basic <br/>
          color to some unique pattern. Our <br/>
          products are suitable for personal or <br/>
          formal activities. What you need is all <br/>
          here.
        </p>
        <Link to="/shop" className="explore">Explore Product</Link>
        <div className="scroll-down">
          <span className="line"></span>
          <span>scroll down</span>
        </div>
      </div>
      <div className="latest-product">
        <p>Latest Products</p>
        <span className="latest-line"></span>
      </div>
      <div className="products">
        {
          loading ? "Loading..." :
          <ProductCard
            data={data}
            insertKeranjang={insertKeranjang}
          />
        }
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

export default Home;
