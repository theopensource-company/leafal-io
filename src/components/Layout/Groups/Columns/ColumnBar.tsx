import { JSX } from 'solid-js';
import style from '~/styles/components/Layout/Groups/Columns.module.scss';

export function ColumnBar(_props: JSX.HTMLElementTags['div']) {
    return <div class={style.bar} {..._props} />;
}
