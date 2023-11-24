import { User } from '#/constants/types/User.types';
import { database } from '../surreal';

export const getCurrentUser = async () => {
    const queries = await database.query<[User[]]>('SELECT * FROM user');
    let user: User | undefined = undefined;
    if (!!queries[0] && !!queries[0][0]) user = User.parse(queries[0][0]);
    return user;
};
