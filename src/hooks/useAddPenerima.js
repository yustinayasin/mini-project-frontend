import { useMutation } from '@apollo/client';
import {insertPenerima} from '../graphql/mutations';

export default function useAddPenerima() {
    const [insertPenerimaFunction, {loading: loadingInsertPenerima}] = useMutation(insertPenerima);

    return {
        insertPenerimaFunction,
        loadingInsertPenerima
    }
}