import * as React from 'react';

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import styles from './Input.module.scss';

function InnerButton({
    children,
    onClick,
    ...props
}: {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
} & JSX.IntrinsicElements['button']) {
    return (
        <button className={styles.button} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export function Button({
    children,
    href,
    onClick,
    ...props
}: {
    children: React.ReactNode;
    href?: Url;
    onClick?: React.MouseEventHandler;
} & JSX.IntrinsicElements['button']) {
    return href ? (
        <Link className={styles.buttonLink} href={href}>
            <InnerButton onClick={onClick} {...props}>
                {children}
            </InnerButton>
        </Link>
    ) : (
        <InnerButton onClick={onClick} {...props}>
            {children}
        </InnerButton>
    );
}
