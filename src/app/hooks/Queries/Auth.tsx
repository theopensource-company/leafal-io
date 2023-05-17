'use client';
import { SurrealDatabase, SurrealInstance, SurrealNamespace } from "@/app/lib/Surreal";
import { TAuthenticateUser, TUserRecord } from "@/constants/types/User.types";
import { useMutation, useQuery } from "@tanstack/react-query"

export const useSignIn = () => 
    useMutation({
        mutationKey: ['auth', 'mutate', 'signin'],
        mutationFn: async (auth: TAuthenticateUser) => {
            const token = await SurrealInstance.signin({
                NS: SurrealNamespace,
                DB: SurrealDatabase,
                SC: 'user',
                ...auth
            });

            if (token) localStorage.setItem('lflsrsess', token);
            return !!token;
        },
    });


export const useSignOut = () =>
    useMutation({
        mutationKey: ['auth', 'mutate', 'signout'],
        mutationFn: async () => {
            localStorage.removeItem('lflsrsess');
            await SurrealInstance.invalidate();
            return true;
        }
    });

export const useAuthenticatedUser = () =>
    useQuery({
        queryKey: ['auth', 'query', 'user'],
        queryFn: async () => {
            const result = await SurrealInstance.query<[TUserRecord[]]>("SELECT * FROM user;");

            if (!result?.[0]?.result?.[0]) throw "Authentication failure.";
            return result[0].result[0];
        }
    })