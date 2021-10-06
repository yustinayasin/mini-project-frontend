import Navbar from '../component/Navbar';
import ProductCard from '../component/ProductCard';
import Footer from '../component/Footer';
import welcome from '../images/welcome.jpg';
import '../styles/Home.scss';
import { Link } from "react-router-dom";
import useSubscribeKemeja from '../hooks/useSubscribeKemeja';
import { useState, useEffect } from 'react';
import ModalKeranjang from '../component/ModalKeranjang';
import useAddKemejaKeranjang from '../hooks/useAddKemejaKeranjang';
import useDeleteKemejaKeranjang from '../hooks/useDeleteKemejaKeranjang';
import useEditKemejaKeranjang from '../hooks/useEditKemejaKeranjang';
import useSubscribeCheckKeranjang from '../hooks/useSubscribeCheckKeranjang';
import useAddKeranjang from '../hooks/useAddKeranjang';
import useGetUser from '../hooks/useGetUser';
import useEditUser from '../hooks/useEditUser';
import ModalSize from '../component/ModalSize';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Home() {
  const [kemejaGetQuery, setKemejaGetQuery] = useState({
    variables: {where: {}}
  });

  const [keranjangQuery, setKeranjangQuery] = useState({
    variables: {where: {}}
  });

  const [userQuery, setUserQuery] = useState({
    variables: {where: {}}
  });

  const [user] = useAuthState(auth);
  const {data, loading, error} = useSubscribeKemeja(kemejaGetQuery);
  const {dataUser, loadingUser} = useGetUser(userQuery);
  const {dataCheckKeranjang, loadingCheckKeranjang, errorCheck} = useSubscribeCheckKeranjang(keranjangQuery);
  const {insertKemejaKeranjangFunction, loadingInsertKemejaKeranjang} = useAddKemejaKeranjang();
  const {deleteKemejaKeranjangFunction, loadingKemejaKeranjangDelete} = useDeleteKemejaKeranjang();
  const {editKemejaKeranjang, loadingEditKemejaKeranjang} = useEditKemejaKeranjang();
  const {editUser, loadingEditUser} = useEditUser();
  const {insertKeranjangFunction, loadingInsertKeranjang} = useAddKeranjang();

  useEffect(() => {
    if(user) {
      setUserQuery({
        variables: {
          id: {
            _eq: user.uid
          }
        }
      });
    }
  }, [user]);
  
  useEffect(() => {
    setKemejaGetQuery({
      variables: {
        where: {}
      }
    });
  }, []);

  useEffect(() => {
    if(user) {
      console.log(user.uid);
      setKeranjangQuery({
        variables: {
          _eq: user.uid
        }
      });
    }
  }, [user]);

  useEffect(() => {
    console.log(dataCheckKeranjang);
  }, [dataCheckKeranjang])

  return (
    <div className="home">
      <Navbar/>
      <div className="welcome">
        <img src={welcome} alt="welcome"/>
        <div className="absolute">
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

        </div>
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
            dataCheckKeranjang={dataCheckKeranjang}
            insertKeranjangFunction={insertKeranjangFunction}
          />
        }
      </div>
      <ModalKeranjang 
        dataCheckKeranjang={dataCheckKeranjang} 
        deleteKemejaKeranjangFunction={deleteKemejaKeranjangFunction} 
        editKemejaKeranjang={editKemejaKeranjang}
        dataUser={dataUser?.users[0]}
        editUser={editUser}
      />
      <ModalSize 
        insertKemejaKeranjangFunction={insertKemejaKeranjangFunction} 
        editKemejaKeranjang={editKemejaKeranjang}
        dataCheckKeranjang={dataCheckKeranjang}
      />
      <Footer/>
    </div>
  );
}

export default Home;
