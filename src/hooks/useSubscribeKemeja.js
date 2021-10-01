import { useSubscription } from '@apollo/client';
import {subsAllKemeja} from '../graphql/subscribe';

export default function useSubscribeKemeja (variables) {
    const {data, loading, error} = useSubscription(subsAllKemeja, variables);

    return {
        data,
        loading,
        error
    }
}