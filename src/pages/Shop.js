import Navbar from '../component/Navbar';
import ProductCard from '../component/ProductCard';
import Footer from '../component/Footer';
import '../styles/Sale.scss';
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


function Sale() {
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

    return (
        <div className="sale">
        <Navbar/>
        <div className="sale-products">
            {
            loading ? "Loading..." :
            <ProductCard
                data={data}
                isShop={true}
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

export default Sale;