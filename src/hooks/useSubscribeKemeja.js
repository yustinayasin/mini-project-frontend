import { useSubscription } from '@apollo/client';
import {subsAllData} from '../graphql/subscribe';

export default function useSubscribeKemeja (variables) {
    const {data, loading, error} = useSubscription(subsAllData, variables);

    return {
        data,
        loading,
        error
    }
}