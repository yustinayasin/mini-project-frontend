import { useQuery } from '@apollo/client';
import {getSale} from '../graphql/queries';

export default function useGetSale () {
    const {data:dataSale, loading:loadingSale, error:errorSale} = useQuery(getSale);

    return {
        dataSale,
        loadingSale,
        errorSale
    }
}