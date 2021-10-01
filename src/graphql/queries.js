import { gql } from '@apollo/client';

export const getSale = gql`
query MyQuery {
  sale {
    id
    id_kemeja
    kemeja {
      nama
      harga
    }
  }
}
`; 