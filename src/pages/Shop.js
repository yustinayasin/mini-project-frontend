import Navbar from '../component/Navbar';
import ProductCard from '../component/ProductCard';
import Footer from '../component/Footer';
import '../css/Sale.css';
import useSubscribeKemeja from '../hooks/useSubscribeKemeja';
import { useEffect, useState } from 'react';
import ModalKeranjang from '../component/ModalKeranjang';
import useInsertKeranjang from '../hooks/useAddKeranjang';
import useDeleteKeranjang from '../hooks/useDeleteKeranjang';
import useEditKeranjang from '../hooks/useEditKeranjang';
import useSubscribeKeranjang from '../hooks/useSubscribeKeranjang';
import ModalSize from '../component/ModalSize';


function Sale() {
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
        <div className="sale">
        <Navbar/>
        <div className="products">
            {
            loading ? "Loading..." :
            <ProductCard
                data={data}
                isShop={true}
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

export default Sale;