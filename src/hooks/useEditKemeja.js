import { useMutation } from '@apollo/client';
import {updateKemeja} from '../graphql/mutations';

export default function useEditKemeja () {
    const [editKemeja, {loading: loadingEditKemeja}] = useMutation(updateKemeja);

    return {
        editKemeja,
        loadingEditKemeja
    }
}