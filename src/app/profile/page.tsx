'use client';

import { redirect } from 'next/navigation';
import { useAuthenticatedUser } from '../hooks/Queries/Auth';

export default function MyProfile() {
    const { data: authenticatedUser } = useAuthenticatedUser();

    if (authenticatedUser) redirect(`/profile/${authenticatedUser.username}`);
    else redirect(`/`);
}
