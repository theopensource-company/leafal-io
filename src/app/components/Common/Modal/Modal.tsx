import * as React from 'react';

import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { X } from 'react-feather';
import styles from './Modal.module.scss';

export type ModalProps = {
    children?: React.ReactNode;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export function Modal({ children, open, setOpen }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (open) dialogRef.current?.showModal();
        else dialogRef.current?.close();
    }, [dialogRef, open]);

    const onclick = (e: React.MouseEvent) => {
        if (!dialogRef.current) return;

        const rect = dialogRef.current.getBoundingClientRect();
        const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;

        if (!isInDialog) setOpen(false);
    };

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialogBox}
            onMouseDown={onclick}
        >
            <div className={styles.modal}>
                <div className={styles.top}>
                    <button
                        className={styles.close}
                        onClick={() => setOpen(false)}
                    >
                        <X />
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </dialog>
    );
}
