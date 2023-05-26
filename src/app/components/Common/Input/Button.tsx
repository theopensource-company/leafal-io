import * as React from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import styles from './Input.module.scss';

function InnerButton({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
}) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

export function Button({
    children,
    href,
    onClick,
}: {
    children: React.ReactNode;
    href?: Url;
    onClick?: React.MouseEventHandler;
}) {
    return href ? (
        <Link className={styles.buttonLink} href={href}>
            <InnerButton onClick={onClick}>{children}</InnerButton>
        </Link>
    ) : (
        <InnerButton onClick={onClick}>{children}</InnerButton>
    );
}
