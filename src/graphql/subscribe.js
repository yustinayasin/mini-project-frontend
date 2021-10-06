import { gql } from '@apollo/client';

export const subsAllKemeja = gql`
subscription MySubscription($where: kemeja_bool_exp = {}) {
    kemeja(where: $where) {
      id
      nama
      harga
      deskripsi
      stock_L
      stock_M
      stock_S
    }
  }
`;

// export const subsAllKeranjang = gql`
// subscription MySubscription {
//   keranjang {
//     id
//     id_kemeja
//     jumlah
//     pembelian_id
//     size
//     kemeja {
//       nama
//       harga
//       stock_L
//       stock_M
//       stock_S
//     }
//   }
// }
// `;

export const subsAllKeranjang = gql`
subscription MySubscription($_eq: String!) {
  keranjang(where: {user_id: {_eq: $_eq}}) {
    id
    user_id
    checked
    kemeja_keranjangs {
      kemeja {
        nama
        harga
        stock_L
        stock_M
        stock_S
      }
      id_kemeja
      jumlah
      size
    }
  }
}
`;

export const checkKeranjang = gql`
subscription MySubscription($_eq: String!) {
  keranjang(where: {user_id: {_eq: $_eq}, checked: {_eq: false}}) {
    id
    user_id
    checked
    kemeja_keranjangs {
      id_kemeja
      jumlah
      size
      kemeja {
        nama
        harga
        stock_L
        stock_M
        stock_S
      }
    }
  }
}
`;

export const subsPenerima = gql`
subscription MySubscription($utama: Boolean_comparison_exp = {}) {
  penerima(where: {utama: $utama}) {
    alamat
    email
    id
    id_user
    jalan
    kode_pos
    nama
    telepon
    utama
  }
}
`;