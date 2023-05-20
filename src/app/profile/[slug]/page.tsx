'use client';
import * as React from 'react';

import { SurrealInstance } from '@/app/lib/Surreal';
import { TPublicUserRecord } from '@/constants/types/User.types';
import { useEffect, useState } from 'react';
import ProfilePage from '../components/ProfilePage';

async function getProfile(slug: string): Promise<TPublicUserRecord | null> {
    const result = await SurrealInstance.query<[TPublicUserRecord[]]>(
        'SELECT * FROM pubuser WHERE username=$slug',
        { slug }
    );

    if (!result?.[0]?.result?.[0]) return null;
    return result[0].result[0];
}

export default function ProfileWithSlug({
    params,
}: {
    params: { slug: string };
}) {
    const [user, setUser] = useState<TPublicUserRecord | null>();

    useEffect(() => {
        getProfile(params.slug).then((u) => setUser(u));
    }, [params]);

    return <>{user && <ProfilePage user={user} />}</>;
}