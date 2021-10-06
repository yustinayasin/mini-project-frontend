import { useMutation } from '@apollo/client';
import {updateKemejaKeranjang} from '../graphql/mutations';

export default function useEditKemejaKeranjang () {
    const [editKemejaKeranjang, {loading: loadingEditKemejaKeranjang}] = useMutation(updateKemejaKeranjang);

    return {
        editKemejaKeranjang,
        loadingEditKemejaKeranjang
    }
}