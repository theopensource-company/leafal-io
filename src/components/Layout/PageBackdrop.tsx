import { JSX, splitProps } from 'solid-js';

import style from '~/styles/components/Layout/PageBackdrop.module.scss';

export function PageBackdrop(
    _props: JSX.HTMLElementTags['div'] & { src?: string }
) {
    const [props, rest] = splitProps(_props, ['src']);
    return (
        <div class={style.backdropContainer}>
            <img src={props.src} alt="Page backdrop" />
            <div class={style.content} {...rest} />
        </div>
    );
}
