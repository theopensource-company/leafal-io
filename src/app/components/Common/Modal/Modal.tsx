import * as React from 'react';

import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { X } from 'react-feather';
import styles from './Modal.module.scss';

export type ModalProps = {
    children?: React.ReactNode;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
};

export function Modal({ children, open, setOpen, title }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                open &&
                e.target &&
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
            )
                setOpen(false);
        }

        function handleEscapeKey(e: KeyboardEvent) {
            if (open && e.key == 'Escape') setOpen(false);
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keyup', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keyup', handleEscapeKey);
        };
    }, [modalRef, setOpen, open]);

    return (
        <div className={[styles.dialogBox, open && styles.open].join(' ')}>
            <div className={styles.modal} ref={modalRef}>
                <div className={styles.top}>
                    <span className={styles.title}>{title}</span>
                    <button
                        className={styles.close}
                        onClick={() => setOpen(false)}
                    >
                        <X />
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
