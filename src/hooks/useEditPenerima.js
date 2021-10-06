import { useMutation } from '@apollo/client';
import {updatePenerima} from '../graphql/mutations';

export default function useEditPenerima() {
    const [editPenerima, {loading: loadingEditPenerima}] = useMutation(updatePenerima);

    return {
        editPenerima,
        loadingEditPenerima
    }
}