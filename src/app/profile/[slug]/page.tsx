import * as React from 'react';

import { SurrealInstance } from '@/app/lib/Surreal';
import { TPublicUserRecord } from '@/constants/types/User.types';
import { Metadata } from 'next';
import { ProfileShell } from '../components/ProfilePage';

// TODO: Figure out metadata storage.

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    let title = 'leafal.io';

    const slug = params.slug;

    // FIXME
    // This bit is impossible because to have metadata, the page has to be a server component.
    // The problem here is that the server does not have a surreal instance exposed and thus can't query for the user's names.

    const result = await SurrealInstance.query<[TPublicUserRecord[]]>(
        'SELECT * FROM pubuser WHERE username=$slug',
        { slug }
    );

    if (result?.[0].result?.[0])
        title = `${
            result[0].result[0].profile.displayname ??
            result[0].result[0].username
        } - leafal.io`;

    // For now, just put the slug in the title to distinguish its window.
    //title = `${slug} - leafal.io`;

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
