import { useMutation } from '@apollo/client';
import {insertPembelian} from '../graphql/mutations';

export default function useAddPembelian () {
    const [insertPembelianFunction] = useMutation(insertPembelian);

    return {
        insertPembelianFunction
    }
}