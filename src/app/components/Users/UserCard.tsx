import styles from './UserCard.module.scss';

import { TPublicUserRecord, TUserRecord } from '@/constants/types/User.types';
import { cva } from 'class-variance-authority';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';
import DefaultProfilePicture from '../Brand/DefaultProfilePicture';

const cardStyle = cva([styles.default], {
    variants: {
        size: {
            small: [styles.small],
            normal: [styles.normal],
            large: [styles.large],
        },
    },
    defaultVariants: {
        size: 'normal',
    },
});

const statusStyle = cva([styles.status], {
    variants: {
        status: {
            offline: [styles.offline],
            online: [styles.online],
            ingame: [styles.ingame],
        },
    },
    defaultVariants: {
        status: 'offline',
    },
});

export type UserCardProps = {
    size?: 'small' | 'normal' | 'large';
    user: TUserRecord | TPublicUserRecord;
    showName?: boolean;
    showStatus?: boolean;
    isLink?: boolean;
};

export function ProfileLinkWrapper({
    children,
    className,
    href,
}: {
    children: React.ReactNode;
    className: string;
    href: Url;
}) {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}

function Card({
    user,
    showName = true,
    showStatus = true,
}: Omit<UserCardProps, 'isLink' | 'size'>) {
    return (
        <>
            <div className={styles.avatar}>
                {user.picture ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={user.picture} alt={user.preferredName} />
                ) : (
                    <DefaultProfilePicture className={styles.defaultAvatar} />
                )}
            </div>
            {(showName || showStatus) && (
                <div className={styles.text}>
                    {showName && (
                        <span className={styles.username}>
                            {user.preferredName}
                        </span>
                    )}
                    {showStatus && !!user.status && (
                        <span className={statusStyle({ status: user.status })}>
                            {user.status}
                        </span>
                    )}
                </div>
            )}
        </>
    );
}

export default function UserCard({
    size,
    user,
    isLink = true,
    ...rest
}: UserCardProps) {
    return isLink ? (
        <ProfileLinkWrapper
            href={`/profile/${user.username}`}
            className={cardStyle({ size: size })}
        >
            <Card user={user} {...rest} />
        </ProfileLinkWrapper>
    ) : (
        <div className={cardStyle({ size: size })}>
            <Card user={user} {...rest} />
        </div>
    );
}
