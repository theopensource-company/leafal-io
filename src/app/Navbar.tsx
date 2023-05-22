'use client';
import * as React from 'react';

import { TUserRecord } from '@/constants/types/User.types';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Bell, Box, ChevronDown, LogOut, Settings } from 'react-feather';
import styles from './Navbar.module.scss';
import Logo from './components/Brand/Logo';
import DropdownRenderer from './components/Common/DropdownRenderer';
import UserCard from './components/Users/UserCard';
import { useAuthenticatedUser, useSignOut } from './hooks/Queries/Auth';

export function NavbarItem({
    children,
    href,
}: {
    children?: React.ReactNode;
    href?: Url;
}) {
    return (
        <Link className={styles.navItem} href={href ?? ''}>
            {children}
        </Link>
    );
}

export function NavbarAccountOption({
    children,
    href,
    icon,
    onClick,
}: {
    children: React.ReactNode;
    href?: Url;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler;
}) {
    return href ? (
        <Link className={styles.menuItem} href={href} onClick={onClick}>
            {React.isValidElement(icon) && (
                <div className={styles.icon}>{icon}</div>
            )}
            {children}
        </Link>
    ) : (
        <div className={styles.menuItem} onClick={onClick}>
            {React.isValidElement(icon) && (
                <div className={styles.icon}>{icon}</div>
            )}
            {children}
        </div>
    );
}

export function NavbarAccountSeparator() {
    return <div className={styles.sep} />;
}

export function NavbarAccount({ user }: { user: TUserRecord }) {
    const [expanded, setExpanded] = useState(false);

    const { data: authenticatedUser, refetch: refetchAuthenticatedUser } =
        useAuthenticatedUser();
    const { mutate: signOut, data: signOutSuccess } = useSignOut();

    // Effect to refetch on sign out.
    useEffect(() => {
        refetchAuthenticatedUser();
    }, [signOutSuccess, refetchAuthenticatedUser]);

    return (
        <div className={styles.account}>
            <DropdownRenderer
                clickable={
                    <div
                        className={styles.clickToExpand}
                        onClick={() => setExpanded(!expanded)}
                    >
                        <UserCard
                            user={user}
                            size="small"
                            showName={false}
                            showStatus={false}
                            isLink={false}
                        />
                        <span
                            className={[
                                styles.overlay,
                                expanded ? styles.turned : '',
                            ].join(' ')}
                        >
                            <ChevronDown />
                        </span>
                    </div>
                }
                open={expanded}
                setOpen={setExpanded}
            >
                <NavbarAccountOption
                    href={`/profile/${authenticatedUser?.username}`}
                >
                    <UserCard user={user} size="normal" isLink={false} />
                </NavbarAccountOption>

                <NavbarAccountSeparator />

                <NavbarAccountOption href={`/#todo`} icon={<Box />}>
                    <span>Library</span>
                </NavbarAccountOption>

                <NavbarAccountOption href={`/#todo`} icon={<Bell />}>
                    <span>Notifications</span>
                </NavbarAccountOption>

                <NavbarAccountSeparator />

                <NavbarAccountOption href={`/#todo`} icon={<Settings />}>
                    <span>Settings</span>
                </NavbarAccountOption>

                <NavbarAccountOption
                    onClick={() => signOut()}
                    icon={<LogOut />}
                >
                    <span>Sign out</span>
                </NavbarAccountOption>
            </DropdownRenderer>
        </div>
    );
}

export default function Navbar() {
    const { data: authenticatedUser } = useAuthenticatedUser();

    return (
        <div className={styles.default}>
            <div className={styles.content}>
                <div className={styles.items}>
                    <NavbarItem href="/">
                        <Logo text="leafal.io" />
                    </NavbarItem>
                    <NavbarItem href="/">Home</NavbarItem>
                </div>

                {!!authenticatedUser && (
                    <NavbarAccount user={authenticatedUser} />
                )}
            </div>
        </div>
    );
}
