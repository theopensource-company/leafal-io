'use client';
import * as React from 'react';

import { TUserRecord } from '@/constants/types/User.types';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';
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

export function NavbarAccount({ user }: { user: TUserRecord }) {
    const [expanded, setExpanded] = useState(false);

    const { refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
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
                        <UserCard user={user} showName={false} />
                        <span
                            className={`${styles.overlay}${
                                expanded ? ` ${styles.turned}` : ''
                            }`}
                        >
                            <ChevronDown />
                        </span>
                    </div>
                }
                open={expanded}
                setOpen={setExpanded}
            >
                <Link
                    href="/profile"
                    onClick={() => setExpanded(false)}
                    className={styles.menuItem}
                >
                    <UserCard user={user} />
                </Link>
                <div className={styles.sep}></div>
                <div onClick={() => signOut()} className={styles.menuItem}>
                    Sign out
                </div>
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
                    <NavbarItem href="/profile">Profile</NavbarItem>
                </div>

                {!!authenticatedUser && (
                    <NavbarAccount user={authenticatedUser} />
                )}
            </div>
        </div>
    );
}
