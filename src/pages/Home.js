import Navbar from '../component/Navbar';
import ProductCard from '../component/ProductCard';
import Footer from '../component/Footer';
import welcome from '../images/welcome.jpg';
import '../css/Home.css';
import { Link } from "react-router-dom";
import useSubscribe from '../hooks/useSubscribeKemeja';
import { useState, useEffect } from 'react';
import ModalKeranjang from '../component/ModalKeranjang';

function Home() {
  const [kemejaGetQuery, setKemejaGetQuery] = useState({
    variables: {where: {}}
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {data, loading, error} = useSubscribe(kemejaGetQuery);

  useEffect(() => {
    setKemejaGetQuery({
      variables: {
        where: {}
      }
    });
  }, []);

  const getDetails = (id) => {
    setKemejaGetQuery(
      {variables: 
        {'id': id}
      }
    );
  }
  
  return (
    <div className="home">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
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
        <a className="explore" href="#">Explore Product</a>
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
          data.kemeja.slice(data.kemeja.length-6, data.kemeja.length).map((item) => {
            return(
              <Link 
                key={item.id}
                to={{
                  pathname: "/details",
                  item: item
                }}
              >
                  <ProductCard
                    item={item}
                  />
              </Link>
            );
          })
        }
      </div>
      <ModalKeranjang isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Footer/>
    </div>
  );
}

export default Home;
