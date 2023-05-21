'use client';

import * as React from 'react';

import { useAuthenticatedUser } from '../hooks/Queries/Auth';
import { ProfileShell } from './components/ProfilePage';

export default function ProfileIndex() {
    const { data: authenticatedUser, isLoading } = useAuthenticatedUser();

    return (
        <main>
            {!isLoading && (
                <>
                    {authenticatedUser ? (
                        <ProfileShell username={authenticatedUser.username} />
                    ) : (
                        'Sign in to view your own profile.'
                    )}
                </>
            )}
        </main>
    );
}
