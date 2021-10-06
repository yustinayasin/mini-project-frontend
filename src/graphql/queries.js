import { gql } from '@apollo/client';

export const getSale = gql`
query MyQuery {
  sale {
    id
    id_kemeja
    kemeja {
      nama
      harga
      stock_L
      stock_M
      stock_S
      id
      deskripsi
    }
    percent
  }
}
`; 

export const checkKeranjang = gql`
query MyQuery($_eq: String!) {
  keranjang(where: {user_id: {_eq: $_eq}}) {
    id
    user_id
    checked
  }
}
`;

export const getUser = gql`
query MyQuery($id: String_comparison_exp = {}) {
  users(where: {id: $id}) {
    id
    email
    alamat
    jalan
    kode_pos
    nama_panjang
    nomor_telepon
  }
}
`;