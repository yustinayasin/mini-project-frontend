import { gql } from '@apollo/client';

export const subsAllData = gql`
subscription MySubscription($where: kemeja_bool_exp = {}) {
    kemeja(where: $where) {
      id
      nama
      harga
      deskripsi
      stock_l
      stock_m
      stock_s
    }
  }
`;