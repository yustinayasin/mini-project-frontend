import { useQuery } from '@apollo/client';
import {getUser} from '../graphql/queries';

export default function useGetUser (variables) {
    const {data:dataUser, loading:loadingUser} = useQuery(getUser, variables);

    return {
        dataUser,
        loadingUser
    }
}