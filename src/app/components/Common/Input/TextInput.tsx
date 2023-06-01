import * as React from 'react';

import { forwardRef } from 'react';
import styles from './Input.module.scss';

export const TextInput = forwardRef<
    HTMLInputElement,
    JSX.IntrinsicElements['input']
>((props, ref) => {
    return <input className={styles.textInput} ref={ref} {...props} />;
});
TextInput.displayName = 'TextInput';
