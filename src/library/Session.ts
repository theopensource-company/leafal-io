import { createResource } from 'solid-js';
import { createCookieSessionStorage } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { featureFlags } from './Environment';
import { SurrealQuery } from './Surreal';
import { TUserRecord } from './Types/User.types';

const cookieStorage = createCookieSessionStorage({
    cookie: {
        name: 'session',
        secure: featureFlags.secureSessionCookie,
        secrets: ['supersecret'],
        sameSite: 'lax',
        path: '/',
        maxAge: 86400 * 60,
        httpOnly: true,
    },
});

const getUserToken = () =>
    createServerData$(async (_, event) => {
        const cookie = event.request.headers.get('Cookie');
        const session = await cookieStorage.getSession(cookie);
        return session.get('token') as string;
    });

const setUserToken = (token: string) =>
    createServerData$(
        async (token, event) => {
            const cookie = event.request.headers.get('Cookie');
            const session = await cookieStorage.getSession(cookie);
            return session.set('token', token);
        },
        { key: () => token }
    );

const fetchAuthenticatedUser = async () => {
    const result = await SurrealQuery<TUserRecord>('SELECT * FROM user;');
    if (!result?.[0]?.result?.[0]) return {};

    return result[0].result[0];
};

const [authenticatedUser, { refetch: refetchAuthenticatedUser }] =
    createResource(fetchAuthenticatedUser);

export {
    getUserToken,
    setUserToken,
    authenticatedUser,
    refetchAuthenticatedUser,
};
