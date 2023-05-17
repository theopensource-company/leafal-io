'use client';
import { TPublicUserRecord, TUserRecord } from '@/constants/types/User.types';
import styles from './Navbar.module.scss';
import { useAuthenticatedUser, useSignIn, useSignOut, useSignUp } from './hooks/Queries/Auth';
import UserCard from './components/Users/UserCard';
import { useEffect } from 'react';

export function NavbarItem({ children }: {
    children: React.ReactNode;
}) {
    return <div className={styles.navItem}>
        {children}
    </div>
}

export function NavbarAccount({ user }: { user: TUserRecord }) {
    return <div className={styles.account}>
        <UserCard user={user} />
    </div>
}

export default function Navbar({}) {
    const { data: authenticatedUser } = useAuthenticatedUser();

    return <div className={styles.default}>
        <div className={styles.items}>
            <NavbarItem>Hello</NavbarItem>
        </div>

        {!!authenticatedUser && <NavbarAccount user={authenticatedUser} />}
    </div>;
}
