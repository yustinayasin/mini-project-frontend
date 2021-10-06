import { useMutation } from '@apollo/client';
import {insertUser} from '../graphql/mutations';

export default function useAddUser () {
    const [insertUserFunction, {loading: loadingInsertUser}] = useMutation(insertUser);

    return {
        insertUserFunction,
        loadingInsertUser
    }
}