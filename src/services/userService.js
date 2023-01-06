import { getUsers } from "../client/userClient";

export const getUsersService = async () => {
    let users = [];
    (Promise.all([
        await getUsers().then((values) => {
            if (values !== null) {
                users = [...users, ...values !== undefined ? values : []];
            }
        }),
    ]).catch(error => {
        new Error(error);
    }));
    return users;
}

