import { useMutation } from '@apollo/client';
import {deleteItem} from '../graphql/mutations';

export default function useDeleteKeranjang () {
    const [deleteKeranjang, {loading: loadingDelete}] = useMutation(deleteItem);

    return {
        deleteKeranjang,
        loadingDelete
    }
}