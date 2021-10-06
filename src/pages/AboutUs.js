import about1 from '../images/about-1.jpg';
import about2 from '../images/about-2.jpg';
import about3 from '../images/about-3.jpg';
import ModalKeranjang from '../component/ModalKeranjang';
import ModalSize from '../component/ModalSize';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import '../styles/AboutUs.scss';
import { useState, useEffect } from 'react';
import useAddKemejaKeranjang from '../hooks/useAddKemejaKeranjang';
import useDeleteKemejaKeranjang from '../hooks/useDeleteKemejaKeranjang';
import useEditKemejaKeranjang from '../hooks/useEditKemejaKeranjang';
import useSubscribeCheckKeranjang from '../hooks/useSubscribeCheckKeranjang';
import useGetUser from '../hooks/useGetUser';
import useEditUser from '../hooks/useEditUser';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function AboutUs() {
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