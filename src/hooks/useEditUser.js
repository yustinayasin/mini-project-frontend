import { useMutation } from '@apollo/client';
import {updateUser} from '../graphql/mutations';

export default function useEditUser() {
    const [editUser, {loading: loadingEditUser}] = useMutation(updateUser);

    return {
        editUser,
        loadingEditUser
    }
}