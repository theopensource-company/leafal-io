'use client';
import * as React from 'react';

import { TUserRecord } from '@/constants/types/User.types';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
    Box,
    ChevronRight,
    LogOut,
    Settings,
    ShoppingBag,
} from 'react-feather';
import styles from './Navigation.module.scss';
import Logo from './components/Brand/Logo';
import DropdownRenderer from './components/Common/DropdownRenderer';
import { Button } from './components/Common/Input/Button';
import { AuthModal } from './components/Common/Modal/Variants/AuthModal';
import UserCard from './components/Users/UserCard';
import { useAuthenticatedUser, useSignOut } from './hooks/Queries/Auth';

export function NavbarItem({
    children,
    href,
}: {
    children?: React.ReactNode;
    href?: Url;
}) {
    const pathname = usePathname();

    return (
        <Link
            className={[
                styles.navItem,
                pathname == href ? styles.active : '',
            ].join(' ')}
            href={href ?? ''}
        >
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

export function NavbarSeparator() {
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
                            <ChevronRight />
                        </span>
                    </div>
                }
                className={styles.menu}
                open={expanded}
                setOpen={setExpanded}
            >
                <NavbarAccountOption
                    href={`/profile/${authenticatedUser?.username}`}
                >
                    <UserCard user={user} size="normal" isLink={false} />
                </NavbarAccountOption>

                <NavbarSeparator />

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
    const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);

    return (
        <>
            <AuthModal
                open={authModalOpen}
                setOpen={setAuthModalOpen}
            ></AuthModal>

            <div className={styles.mainMenu}>
                <Link className={styles.logo} href="/">
                    <Logo />
                </Link>
                <NavbarSeparator />
                <div className={styles.tabs}>
                    <NavbarItem href="/">
                        <ShoppingBag />
                    </NavbarItem>
                    {authenticatedUser && (
                        <NavbarItem href="/library">
                            <Box />
                        </NavbarItem>
                    )}
                </div>
                <NavbarSeparator />
                {authenticatedUser ? (
                    <NavbarAccount user={authenticatedUser} />
                ) : (
                    <Button onClick={() => setAuthModalOpen(true)}>
                        Sign in
                    </Button>
                )}
            </div>
        </>
    );
}
