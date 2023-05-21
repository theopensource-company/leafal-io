import * as React from 'react';

import { SurrealInstance } from '@/app/lib/Surreal';
import { TPublicUserRecord } from '@/constants/types/User.types';
import { Metadata } from 'next';
import { ProfileShell } from '../components/ProfilePage';

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    let title = 'leafal.io';

    const slug = params.slug;

    const result = await SurrealInstance.query<[TPublicUserRecord[]]>(
        'SELECT * FROM pubuser WHERE username=$slug',
        { slug }
    );

    if (result?.[0].result?.[0])
        title = `${
            result[0].result[0].profile.displayname ??
            result[0].result[0].username
        }'s profile - leafal.io`;

    return { title };
}

export default function ProfileWithSlug({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <main>
            <ProfileShell username={params.slug} />
        </main>
    );
}
