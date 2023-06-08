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
    LogIn,
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
    tabIndex,
}: {
    children?: React.ReactNode;
    href?: Url;
    tabIndex?: number;
}) {
    const pathname = usePathname();

    return (
        <Link
            className={[
                styles.navItem,
                pathname == href ? styles.active : '',
            ].join(' ')}
            href={href ?? ''}
            tabIndex={tabIndex}
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
    tabIndex,
}: {
    children: React.ReactNode;
    href?: Url;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    tabIndex?: number;
}) {
    return href ? (
        <Link
            className={styles.menuItem}
            href={href}
            tabIndex={tabIndex}
            onClick={onClick}
        >
            {React.isValidElement(icon) && (
                <div className={styles.icon}>{icon}</div>
            )}
            {children}
        </Link>
    ) : (
        <div className={styles.menuItem} tabIndex={tabIndex} onClick={onClick}>
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

    const expand = () => setExpanded(!expanded);

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
                        onClick={expand}
                        onKeyDown={(e) =>
                            (e.key === 'Enter' || e.key === 'Space') && expand()
                        }
                        tabIndex={19}
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
                    tabIndex={expanded ? 21 : -1}
                    href={`/profile/${authenticatedUser?.username}`}
                >
                    <UserCard user={user} size="normal" isLink={false} />
                </NavbarAccountOption>

                <NavbarSeparator />

                <NavbarAccountOption
                    tabIndex={expanded ? 22 : -1}
                    href={`/#todo`}
                    icon={<Settings />}
                >
                    <span>Settings</span>
                </NavbarAccountOption>

                <NavbarAccountOption
                    tabIndex={expanded ? 23 : -1}
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
                <Link autoFocus tabIndex={10} className={styles.logo} href="/">
                    <Logo />
                </Link>
                <NavbarSeparator />
                <div className={styles.tabs}>
                    <NavbarItem tabIndex={11} href="/">
                        <ShoppingBag />
                    </NavbarItem>
                    {authenticatedUser && (
                        <NavbarItem tabIndex={12} href="/library">
                            <Box />
                        </NavbarItem>
                    )}
                </div>
                <NavbarSeparator />
                {authenticatedUser ? (
                    <NavbarAccount user={authenticatedUser} />
                ) : (
                    <Button
                        className={styles.login}
                        onClick={() => setAuthModalOpen(true)}
                    >
                        <LogIn />
                    </Button>
                )}
            </div>
        </>
    );
}
