import { useSubscription } from '@apollo/client';
import {checkKeranjang} from '../graphql/subscribe';

export default function useSubscribeCheckKeranjang(variables) {
    const {data:dataCheckKeranjang, loading:loadingCheckKeranjang, error:errorCheck} = useSubscription(checkKeranjang, variables);

    return {
        dataCheckKeranjang,
        loadingCheckKeranjang,
        errorCheck
    }
}