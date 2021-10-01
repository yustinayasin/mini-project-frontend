import Navbar from '../component/Navbar';
import ProductCard from '../component/ProductCard';
import Footer from '../component/Footer';
import '../css/Sale.css';
import { Link } from "react-router-dom";
import useGetSale from '../hooks/useGetSale';
import { useEffect } from 'react';
import ModalKeranjang from '../component/ModalKeranjang';
import useInsertKeranjang from '../hooks/useAddKeranjang';
import useDeleteKeranjang from '../hooks/useDeleteKeranjang';
import useEditKeranjang from '../hooks/useEditKeranjang';
import useSubscribeKeranjang from '../hooks/useSubscribeKeranjang';
import ModalSize from '../component/ModalSize';


function Sale() {
  const {dataSale, loadingSale} = useGetSale();
  const {dataKeranjang, loadingKeranjang} = useSubscribeKeranjang();
  const {insertKeranjang, loadingInsert} = useInsertKeranjang();
  const {deleteKeranjang, loadingDelete} = useDeleteKeranjang();
  const {editKeranjang, loadingEdit} = useEditKeranjang();

  return (
    <div className="sale">
      <Navbar/>
      <div className="sale-product">
        <p>Sale Products</p>
        <span className="sale-line"></span>
      </div>
      <div className="products">
        {
          loadingSale ? "Loading..." :
          <ProductCard
            data={dataSale}
            isShop={false}
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