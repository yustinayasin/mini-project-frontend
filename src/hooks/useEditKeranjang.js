import { useMutation } from '@apollo/client';
import {editItem} from '../graphql/mutations';

export default function useEditKeranjang () {
    const [editKeranjang, {loading: loadingEdit}] = useMutation(editItem);

    return {
        editKeranjang,
        loadingEdit
    }
}