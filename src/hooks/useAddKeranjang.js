import { useMutation } from '@apollo/client';
import {insertKeranjang} from '../graphql/mutations';

export default function useAddKeranjang () {
    const [insertKeranjangFunction, {loading: loadingInsertKeranjang}] = useMutation(insertKeranjang);

    return {
        insertKeranjangFunction,
        loadingInsertKeranjang
    }
}