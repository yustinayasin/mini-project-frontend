import { useQuery } from '@apollo/client';
import {checkKeranjang} from '../graphql/queries';

export default function useCheckKeranjang () {
    const {data:dataCheckKeranjang, loading:loadingCheckKeranjang, error:errorCheckKeranjang} = useQuery(checkKeranjang);

    return {
        dataCheckKeranjang,
        loadingCheckKeranjang,
        errorCheckKeranjang
    }
}