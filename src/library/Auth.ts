import { createResource } from 'solid-js';
import { SurrealInstance } from './Surreal';
import { TUserRecord } from './Types/User.types';

const fetchAuthenticatedUser = async () => {
    const result = await SurrealInstance.query<[TUserRecord[]]>(
        'SELECT * FROM user;'
    );
    if (!result?.[0]?.result?.[0]) return null;
    return result[0].result[0];
};

const [authenticatedUser, { refetch: refetchAuthenticatedUser }] =
    createResource(fetchAuthenticatedUser, {
        ssrLoadFrom: 'initial',
        initialValue: null,
    });

export { authenticatedUser, refetchAuthenticatedUser };
