import { useMutation } from '@apollo/client';
import {updateKeranjang} from '../graphql/mutations';

export default function useEditKeranjang () {
    const [editKeranjang, {loading: loadingEditKeranjang}] = useMutation(updateKeranjang);

    return {
        editKeranjang,
        loadingEditKeranjang
    }
}