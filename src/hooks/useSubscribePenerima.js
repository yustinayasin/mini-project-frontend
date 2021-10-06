import { useSubscription } from '@apollo/client';
import {subsPenerima} from '../graphql/subscribe';

export default function useSubscribePenerima () {
    const {data:dataPenerima, loading:loadingPenerima} = useSubscription(subsPenerima);

    return {
        dataPenerima,
        loadingPenerima
    }
}