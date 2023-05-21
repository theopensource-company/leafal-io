'use client';

import { SurrealInstance as surreal } from '@/app/lib/Surreal';
import { TPublicUserRecord, TUserRecord } from '@/constants/types/User.types';
import { useQuery } from '@tanstack/react-query';

export function processUserRecord(user: TUserRecord) {
    return {
        ...user,
        preferredName: user.profile.displayname ?? user.username,
    };
}

export function processPublicUserRecord(user: TPublicUserRecord) {
    return {
        ...user,
        preferredName: user.profile.displayname ?? user.username,
    };
}

export async function getPublicUser(username?: TPublicUserRecord['username']) {
    const result = await surreal.query<[TPublicUserRecord[]]>(
        `SELECT * FROM pubuser WHERE username=$username`,
        { username }
    );

    if (!result?.[0]?.result?.[0]) return null;
    return processPublicUserRecord(result[0].result[0]);
}

export const usePublicUser = (username?: TPublicUserRecord['username']) =>
    useQuery({
        queryKey: ['users', username],
        queryFn: async () => getPublicUser(username),
    });
