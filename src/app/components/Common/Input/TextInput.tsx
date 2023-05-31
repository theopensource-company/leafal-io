import * as React from 'react';

import styles from './Input.module.scss';

export function TextInput({
    reference,
    ...props
}: {
    reference: React.RefObject<HTMLInputElement>;
} & JSX.IntrinsicElements['input']) {
    return <input className={styles.textInput} ref={reference} {...props} />;
}
