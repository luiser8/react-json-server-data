import { get } from '../helpers/Fetch';

export const getUsers = async () => {
    return await get('users');
}
