'use client';
import * as React from 'react';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthenticatedUser } from '../hooks/Queries/Auth';

export default function MyProfile() {
    const { data: authenticatedUser, isLoading } = useAuthenticatedUser();

    useEffect(() => {
        if (!isLoading) {
            if (authenticatedUser)
                redirect(`/profile/${authenticatedUser.username}`);
            else redirect(`/`);
        }
    }, [isLoading, authenticatedUser]);

    return <></>;
}
