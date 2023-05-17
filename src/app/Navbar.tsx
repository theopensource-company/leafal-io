'use client';
import { TPublicUserRecord, TUserRecord } from '@/constants/types/User.types';
import styles from './Navbar.module.scss';
import { useAuthenticatedUser, useSignIn, useSignOut, useSignUp } from './hooks/Queries/Auth';
import UserCard from './components/Users/UserCard';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

export function NavbarItem({ children, href }: {
    children?: React.ReactNode;
    href?: Url;
}) {
    return <div className={styles.navItem}>
        <Link href={href ?? ""}>
            {children}
        </Link>
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
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/profile">Profile</NavbarItem>
        </div>

        {!!authenticatedUser && <NavbarAccount user={authenticatedUser} />}
    </div>;
}
