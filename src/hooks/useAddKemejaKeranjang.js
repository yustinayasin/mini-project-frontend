import { useMutation } from '@apollo/client';
import {insertKemejaKeranjang} from '../graphql/mutations';

export default function useAddKemejaKeranjang () {
    const [insertKemejaKeranjangFunction, {loading: loadingInsertKemejaKeranjang}] = useMutation(insertKemejaKeranjang);

    return {
        insertKemejaKeranjangFunction,
        loadingInsertKemejaKeranjang
    }
}