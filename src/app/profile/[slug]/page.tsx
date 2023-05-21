import * as React from 'react';
import { ProfileShell } from '../components/ProfilePage';

// TODO: Figure out metadata storage.

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
