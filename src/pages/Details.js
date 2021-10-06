import DetailCard from '../component/DetailCard';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../styles/Details.scss';
import { useLocation } from "react-router-dom";
import useAddKemejaKeranjang from '../hooks/useAddKemejaKeranjang';
import useDeleteKemejaKeranjang from '../hooks/useDeleteKemejaKeranjang';
import useEditKemejaKeranjang from '../hooks/useEditKemejaKeranjang';
import useSubscribeCheckKeranjang from '../hooks/useSubscribeCheckKeranjang';
import useAddKeranjang from '../hooks/useAddKeranjang';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import ModalKeranjang from '../component/ModalKeranjang';
import ModalSize from '../component/ModalSize';
import { useState, useEffect } from 'react';
import useGetUser from '../hooks/useGetUser';
import useEditUser from '../hooks/useEditUser';

function Details() {
  const [keranjangQuery, setKeranjangQuery] = useState({
    variables: {where: {}}
  });

  const [userQuery, setUserQuery] = useState({
    variables: {where: {}}
  });

  const [user] = useAuthState(auth);
  const {dataUser, loadingUser} = useGetUser(userQuery);
  const {dataCheckKeranjang, loadingCheckKeranjang, errorCheck} = useSubscribeCheckKeranjang(keranjangQuery);
  const {insertKemejaKeranjangFunction, loadingInsertKemejaKeranjang} = useAddKemejaKeranjang();
  const {deleteKemejaKeranjangFunction, loadingKemejaKeranjangDelete} = useDeleteKemejaKeranjang();
  const {editKemejaKeranjang, loadingEditKemejaKeranjang} = useEditKemejaKeranjang();
  const {editUser, loadingEditUser} = useEditUser();
  const {insertKeranjangFunction, loadingInsertKeranjang} = useAddKeranjang();
  const kemeja = useLocation();

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
    console.log(errorCheck);
  }, [errorCheck]);

  return (
    <div className="details">
      <Navbar />
      <DetailCard 
        item={kemeja.item}
        dataCheckKeranjang={dataCheckKeranjang}
        insertKeranjangFunction={insertKeranjangFunction}
      />
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

export default Details;
