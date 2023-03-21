import { JSX, splitProps } from 'solid-js';
import style from '~/styles/components/Layout/Groups/Columns.module.scss';

export type ColumnProps = {
    variant: 'onefourth' | 'threefourth' | 'twothird' | 'onethird' | 'onehalf';
};

export function Column(_props: JSX.HTMLElementTags['div'] & ColumnProps) {
    const [props, rest] = splitProps(_props, ['variant']);

    return <div class={style[props.variant]} {...rest} />;
}
