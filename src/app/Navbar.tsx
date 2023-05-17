'use client';
import { TPublicUserRecord, TUserRecord } from '@/constants/types/User.types';
import styles from './Navbar.module.scss';
import { useAuthenticatedUser, useSignIn, useSignOut, useSignUp } from './hooks/Queries/Auth';
import UserCard from './components/Users/UserCard';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import Logo from './components/Brand/Logo';
import { useEffect, useState } from 'react';

export function NavbarItem({ children, href }: {
    children?: React.ReactNode;
    href?: Url;
}) {
    return <Link className={styles.navItem} href={href ?? ""}>
        {children}
    </Link>
}

export function NavbarAccount({ user }: { user: TUserRecord }) {
    const [expanded, setExpanded] = useState(false);
    
    const { refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
    const { mutate: signOut, data: signOutSuccess } = useSignOut();
  
    // Effect to refetch on sign out.
    useEffect(() => {
      refetchAuthenticatedUser();
    }, [signOutSuccess, refetchAuthenticatedUser]);

    return <div className={styles.account}>
        <div className={styles.clickToExpand} onClick={() => setExpanded(!expanded)}>
            <UserCard user={user} showName={false} />
            <span className={styles.overlay}>{expanded ? "open" : "closed"}</span>
        </div>
        <div className={`${styles.menu}${expanded ? ` ${styles.expanded}` : ''}`}>
            <Link href="/profile" onClick={() => setExpanded(false)} className={styles.menuItem}>View profile</Link>
            <div className={styles.sep}></div>
            <div onClick={() => signOut()} className={styles.menuItem}>Sign out</div>
        </div>
    </div>
}

export default function Navbar({}) {
    const { data: authenticatedUser } = useAuthenticatedUser();

    return <div className={styles.default}>
        <div className={styles.content}>
            <div className={styles.items}>
                <NavbarItem href="/"><Logo text='leafal.io' /></NavbarItem>
                <NavbarItem href="/">Home</NavbarItem>
                <NavbarItem href="/profile">Profile</NavbarItem>
            </div>

            {!!authenticatedUser && <NavbarAccount user={authenticatedUser} />}
        </div>
    </div>;
}
