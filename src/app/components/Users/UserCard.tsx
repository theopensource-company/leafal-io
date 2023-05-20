import styles from './UserCard.module.scss';

import { TPublicUserRecord, TUserRecord } from '@/constants/types/User.types';
import React from 'react';

export type UserCardProps = {
    user: TUserRecord | TPublicUserRecord;
    showName?: boolean;
};

export default function UserCard({ user, showName = true }: UserCardProps) {
    const processName = () => user.profile.displayname ?? user.username;

    return (
        <div className={styles.default}>
            <div className={styles.avatar}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={user.picture} alt={processName()} />
            </div>
            {showName && (
                <span className={styles.username}>{processName()}</span>
            )}
        </div>
    );
}
