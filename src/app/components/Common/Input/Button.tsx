import * as React from 'react';

import styles from './Input.module.scss';

export function Button({
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
