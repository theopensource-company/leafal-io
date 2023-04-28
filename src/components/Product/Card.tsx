import { cva } from 'cva';
import { JSX, splitProps } from 'solid-js';
import { A } from 'solid-start';
import { TProductRecord } from '~/library/Types/Product.types';

import style from '~/styles/components/Product/Card.module.scss';

export type ProductCardProps = {
    product: TProductRecord;
    size: 'large' | 'normal' | 'small';
};

export const cardStyle = cva([style.default], {
    variants: {
        size: {
            small: [style.small],
            normal: [style.normal],
            large: [style.large],
        },
    },
    defaultVariants: {
        size: 'normal',
    },
});

export function ProductCard(
    _props: ProductCardProps & JSX.HTMLElementTags['a']
) {
    const [props, rest] = splitProps(_props, ['product', 'size']);

    const price = () =>
        props.product.pricing == 0 ? 'Free' : props.product.pricing.toFixed(2);

    return (
        <A
            href={`/store/${props.product.slug}`}
            class={cardStyle({
                size: props.size,
            })}
            tabIndex="0"
            {...rest}
        >
            <div class={style.thumbnail}>
                <img src={props.product.thumbnail} />
            </div>
            <div class={style.text}>
                <span class={style.title}>{props.product.title}</span>
                <span class={style.specifications}>
                    <span class={style.pricing}>{price()}</span>
                    {props.product.platforms && (
                        <>
                            {' • '}
                            {props.product.platforms.join(', ')}
                        </>
                    )}
                </span>
            </div>
        </A>
    );
}
