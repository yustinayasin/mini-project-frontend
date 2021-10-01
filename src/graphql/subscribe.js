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

export const subsAllKeranjang = gql`
subscription MySubscription {
  keranjang {
    id
    id_kemeja
    jumlah
    pembelian_id
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
`;