import styles from './DropdownRenderer.module.scss';

import * as React from 'react';

import {
    Children,
    Dispatch,
    SetStateAction,
    createRef,
    useEffect,
    useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function DropdownRenderer({
    clickable,
    className,
    children,
    open,
    setOpen,
}: {
    clickable: React.ReactNode;
    className?: string;
    children: React.ReactNode;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const items = Children.toArray(children);
    const menuRef = createRef<HTMLDivElement>();
    const [randIds, setRandIds] = useState<string[]>([]);

    useEffect(
        () =>
            setRandIds(
                Array(items.length)
                    .fill(1)
                    .map(() => `lfl:dropdown:${uuidv4()}`)
            ),
        [items.length]
    );

    //props: https://stackoverflow.com/a/42234988
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                event.target &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [menuRef, setOpen]);

    return (
        <div className={styles.dropdown} ref={menuRef}>
            <div className={styles.clickable} onClick={() => setOpen(!open)}>
                {clickable}
            </div>
            <div
                className={[
                    styles.menu,
                    !open ? styles.hideMenu : '',
                    className,
                ].join(' ')}
            >
                {items.map((item, i) => (
                    <div
                        className={styles.menuItem}
                        onClick={() => setOpen(false)}
                        key={randIds[i] ?? '' + i}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
