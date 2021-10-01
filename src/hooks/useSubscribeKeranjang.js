import { useSubscription } from '@apollo/client';
import {subsAllKeranjang} from '../graphql/subscribe';

export default function useSubscribeKeranjang () {
    const {data:dataKeranjang, loading:loadingKeranjang} = useSubscription(subsAllKeranjang);

    return {
        dataKeranjang,
        loadingKeranjang
    }
}