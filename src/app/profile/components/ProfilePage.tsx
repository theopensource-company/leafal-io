'use client';
import * as React from 'react';

import styles from './ProfilePage.module.scss';

import UserCard from '@/app/components/Users/UserCard';
import { usePublicUser } from '@/app/hooks/Queries/User';
import { TPublicUserRecord } from '@/constants/types/User.types';

export function ProfileShell({ username }: { username: string }) {
    const { data: user } = usePublicUser(username);

    return <div>{user && <ProfilePage user={user} />}</div>;
}

export default function ProfilePage({ user }: { user: TPublicUserRecord }) {
    return (
        <div className={[styles.container, 'main-wrapper'].join(' ')}>
            <div className={styles.backdrop}></div>

            <div className={styles.profile}>
                <div className={styles.card}>
                    <UserCard user={user} size="large" isLink={false} />
                </div>
                {/*<div className={styles.ingame}>
                    <span className={styles.statusText}>Currently playing</span>
                    <span className={styles.gameName}>Celesteia</span>
                </div>*/}
                <div className={styles.content}></div>
            </div>
        </div>
    );
}
