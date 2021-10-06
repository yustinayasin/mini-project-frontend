import { gql } from '@apollo/client';

// export const insertItem = gql`
// mutation MyMutation($id_kemeja: Int!, $jumlah: Int!, $pembelian_id: Int!, $size: String!) {
//     insert_keranjang(objects: {id_kemeja: $id_kemeja, jumlah: $jumlah, pembelian_id: $pembelian_id, size: $size}) {
//       returning {
//         id
//       }
//     }
//   }  
// `;

// export const deleteItem = gql`
// mutation MyMutation($id: Int!) {
//   delete_keranjang_by_pk(id: $id) {
//     id
//   }
// }
// `;

// export const editItem = gql`
// mutation MyMutation($id: Int!, $jumlah: Int!, $size: String!) {
//   update_keranjang_by_pk(pk_columns: {id: $id}, _set: {jumlah: $jumlah, size: $size}) {
//     id
//     id_kemeja
//     jumlah
//     pembelian_id
//     size
//   }
// }
// `;

// export const insertPembelian = gql`
// mutation MyMutation($total_harga: numeric!, $payment: String!, $nomor_telepon: String!, $nama_panjang: String!, $kode_pos: String! $jalan: String!, $email: String!, $ekspedisi: String!, $alamat: String!) {
//   insert_pembelian_one(object: {alamat: $alamat, ekspedisi: $ekspedisi, email: $email, jalan: $jalan, kode_pos: $kode_pos, nama_panjang: $nama_panjang, nomor_telepon: $nomor_telepon, payment: $payment, total_harga: $total_harga}) {
//     id
//     nama_panjang
//     email
//     nomor_telepon
//     jalan
//     alamat
//     kode_pos
//     ekspedisi
//     payment
//     total_harga
//   }
// }
// `;

// MULAI SINI
export const insertUser = gql`
mutation MyMutation($id: String!, $email: String!, $nama_panjang: String!) {
  insert_users_one(object: {id: $id, email: $email, nama_panjang: $nama_panjang}) {
    id
  }
}
`;

export const insertKeranjang = gql`
mutation MyMutation($user_id: String!) {
  insert_keranjang_one(object: {user_id: $user_id}) {
    id
    user_id
  }
}
`;

export const deleteKeranjang = gql`
mutation MyMutation($id: Int!) {
  delete_keranjang_by_pk(id: $id) {
    id
    user_id
  }
}
`;

export const updateKeranjang = gql`
mutation MyMutation($id: Int!, $checked: Boolean!) {
  update_keranjang_by_pk(pk_columns: {id: $id}, _set: {checked: $checked}) {
    checked
    id
    user_id
  }
}
`;

export const insertKemejaKeranjang = gql`
mutation MyMutation($id_kemeja: Int!, $id_keranjang: Int!, $jumlah: Int!, $size: String!) {
  insert_kemeja_keranjang(objects: {id_kemeja: $id_kemeja, id_keranjang: $id_keranjang, jumlah: $jumlah, size: $size}) {
    returning {
      id_kemeja
      id_keranjang
      jumlah
      size
    }
  }
}
`;

export const updateKemejaKeranjang = gql`
mutation MyMutation($id_kemeja: Int!, $id_keranjang: Int!, $jumlah: Int!, $size: String!) {
  update_kemeja_keranjang_by_pk(pk_columns: {id_kemeja: $id_kemeja, id_keranjang: $id_keranjang}, _set: {jumlah: $jumlah, size: $size}) {
    id_kemeja
    id_keranjang
    jumlah
    size
  }
}
`;

export const deleteKemejaKeranjang = gql`
mutation MyMutation($id_kemeja: Int!, $id_keranjang: Int!) {
  delete_kemeja_keranjang_by_pk(id_kemeja: $id_kemeja, id_keranjang: $id_keranjang) {
    id_kemeja
    id_keranjang
    jumlah
    size
  }
}
`;

export const insertPenerima = gql`
mutation MyMutation($id_user: String!, $email: String!, $nama: String!, $alamat: String = "", $jalan: String = "", $kode_pos: String = "", $telepon: String = "", $utama: Boolean = false) {
  insert_penerima_one(object: {alamat: $alamat, email: $email, id_user: $id_user, jalan: $jalan, kode_pos: $kode_pos, nama: $nama, telepon: $telepon, utama: $utama}) {
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

export const updatePenerima = gql`
mutation MyMutation($_eq: String = "", $alamat: String = "", $email: String = "", $jalan: String = "", $kode_pos: String = "", $nama: String = "", $telepon: String = "", $utama: Boolean = false) {
  update_penerima(where: {id_user: {_eq: $_eq}}, _set: {nama: $nama, jalan: $jalan, alamat: $alamat, telepon: $telepon, utama: $utama, kode_pos: $kode_pos, email: $email}) {
    returning {
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
}
`;

export const deletePenerima = gql`
mutation MyMutation($id: Int!) {
  delete_penerima_by_pk(id: $id) {
    id
  }
}
`;

export const updateUser = gql`
mutation MyMutation($id: String = "", $nomor_telepon: String = "", $nama_panjang: String = "", $kode_pos: numeric = "", $jalan: String = "", $email: String = "", $alamat: String = "") {
  update_users_by_pk(pk_columns: {id: $id}, _set: {alamat: $alamat, email: $email, jalan: $jalan, kode_pos: $kode_pos, nama_panjang: $nama_panjang, nomor_telepon: $nomor_telepon}) {
    alamat
    email
    id
    jalan
    kode_pos
    nama_panjang
    nomor_telepon
  }
}
`;

export const updateKemeja = gql`
mutation MyMutation($id: Int!, $_set: kemeja_set_input = {}) {
  update_kemeja_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
  }
}
`;

export const insertPembelian = gql`
mutation MyMutation($ekspedisi: String!, $id_keranjang: Int!, $payment: String!, $total: Int!) {
  insert_pembelian_one(object: {ekspedisi: $ekspedisi, id_keranjang: $id_keranjang, payment: $payment, total: $total}) {
    ekspedisi
    id
    id_keranjang
    id_penerima
    payment
    total
  }
}
`;