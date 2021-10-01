import { useMutation } from '@apollo/client';
import {insertItem} from '../graphql/mutations';

export default function useAddKeranjang () {
    const [insertKeranjang, {loading: loadingInsert}] = useMutation(insertItem);

    return {
        insertKeranjang,
        loadingInsert
    }
}