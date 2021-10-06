import { useMutation } from '@apollo/client';
import {deleteKemejaKeranjang} from '../graphql/mutations';

export default function useDeleteKeranjang () {
    const [deleteKemejaKeranjangFunction, {loading: loadingKemejaKeranjangDelete}] = useMutation(deleteKemejaKeranjang);

    return {
        deleteKemejaKeranjangFunction,
        loadingKemejaKeranjangDelete
    }
}