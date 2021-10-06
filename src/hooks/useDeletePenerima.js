import { useMutation } from '@apollo/client';
import {deletePenerima} from '../graphql/mutations';

export default function useDeletePenerima() {
    const [deletePenerimaFunction, {loading: loadingDeletePenerima}] = useMutation(deletePenerima);

    return {
        deletePenerimaFunction,
        loadingDeletePenerima
    }
}