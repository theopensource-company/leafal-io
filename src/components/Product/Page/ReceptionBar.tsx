import { cva } from 'cva';
import { splitProps } from 'solid-js';
import style from '~/styles/components/Product/Page/ReceptionBar.module.scss';

export const barStyle = cva([style.bar], {
    variants: {
        reception: {
            positive: [style.positive],
            negative: [style.negative],
        },
    },
    defaultVariants: {
        reception: 'positive',
    },
});

export type ReceptionBarProps = {
    rating: number;
};

export function ReceptionBar(_props: ReceptionBarProps) {
    const [props] = splitProps(_props, ['rating']);

    return (
        <div
            class={barStyle({
                reception: props.rating < 0.5 ? 'negative' : 'positive',
            })}
        >
            <span>
                {Math.round(props.rating * 100)}% of players like this game.
            </span>
        </div>
    );
}
