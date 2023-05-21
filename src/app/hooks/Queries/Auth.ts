'use client';

import {
    SurrealDatabase,
    SurrealInstance,
    SurrealNamespace,
} from '@/app/lib/Surreal';
import {
    TActionAuthenticateUser,
    TActionCreateUser,
    TUserRecord,
} from '@/constants/types/User.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { processUserRecord } from './User';

export const useSignIn = () =>
    useMutation({
        mutationKey: ['auth', 'mutate', 'signin'],
        mutationFn: async (auth: TActionAuthenticateUser) => {
            const token = await SurrealInstance.signin({
                NS: SurrealNamespace,
                DB: SurrealDatabase,
                SC: 'user',
                ...auth,
            });

            if (token) localStorage.setItem('lusrsess', token);
            return !!token;
        },
    });

export const useSignUp = () =>
    useMutation({
        mutationKey: ['auth', 'mutate', 'signup'],
        mutationFn: async (create: TActionCreateUser) => {
            const token = await SurrealInstance.signup({
                NS: SurrealNamespace,
                DB: SurrealDatabase,
                SC: 'user',
                ...create,
            });

            if (token) localStorage.setItem('lusrsess', token);
            return !!token;
        },
    });

export const useSignOut = () =>
    useMutation({
        mutationKey: ['auth', 'mutate', 'signout'],
        mutationFn: async () => {
            localStorage.removeItem('lusrsess');
            await SurrealInstance.invalidate();
            return true;
        },
    });

export function useAuthenticatedUser() {
    return useQuery({
        queryKey: ['auth', 'query', 'user'],
        queryFn: async () => {
            const result = await SurrealInstance.query<[TUserRecord[]]>(
                'SELECT * FROM user;'
            );

            if (!result?.[0]?.result?.[0]) return null;
            return processUserRecord(result[0].result[0]);
        },
    });
}
