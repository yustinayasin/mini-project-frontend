import { gql } from '@apollo/client';

export const insertItem = gql`
mutation MyMutation($id_kemeja: Int!, $jumlah: Int!, $pembelian_id: Int!, $size: String!) {
    insert_keranjang(objects: {id_kemeja: $id_kemeja, jumlah: $jumlah, pembelian_id: $pembelian_id, size: $size}) {
      returning {
        id
      }
    }
  }  
`;

export const deleteItem = gql`
mutation MyMutation($id: Int!) {
  delete_keranjang_by_pk(id: $id) {
    id
  }
}
`;

export const editItem = gql`
mutation MyMutation($id: Int!, $jumlah: Int!, $size: String!) {
  update_keranjang_by_pk(pk_columns: {id: $id}, _set: {jumlah: $jumlah, size: $size}) {
    id
    id_kemeja
    jumlah
    pembelian_id
    size
  }
}
`;

export const insertPembelian = gql`
mutation MyMutation($total_harga: numeric!, $payment: String!, $nomor_telepon: String!, $nama_panjang: String!, $kode_pos: String! $jalan: String!, $email: String!, $ekspedisi: String!, $alamat: String!) {
  insert_pembelian_one(object: {alamat: $alamat, ekspedisi: $ekspedisi, email: $email, jalan: $jalan, kode_pos: $kode_pos, nama_panjang: $nama_panjang, nomor_telepon: $nomor_telepon, payment: $payment, total_harga: $total_harga}) {
    id
    nama_panjang
    email
    nomor_telepon
    jalan
    alamat
    kode_pos
    ekspedisi
    payment
    total_harga
  }
}
`;