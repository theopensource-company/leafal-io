import { cva } from 'cva';
import { For, JSX, splitProps } from 'solid-js';
import { A } from 'solid-start';
import { TProductRecord } from '~/library/Types/Product.types';

import style from '~/styles/components/Product/Previews/Column.module.scss';
import { PlatformIcons } from '../../Icons/Brands';

export type ProductColumnPreviewProps = {
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

export function ProductColumnPreviewCarousel(
    _props: JSX.HTMLElementTags['div']
) {
    return <div class={style.carousel} {..._props} />;
}

export function ProductColumnPreview(
    _props: ProductColumnPreviewProps & JSX.HTMLElementTags['a']
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
            {...rest}
        >
            <div class={style.thumbnail}>
                <img src={props.product.thumbnail} />
            </div>
            <div class={style.text}>
                <div class={style.title}>
                    {props.product.title}
                    <span class={style.specifications}>
                        <span class={style.pricing}>{price()}</span>
                    </span>
                </div>
                <p>{props.product.overview}</p>
                <div class={style.platforms}>
                    {props.product.platformNames && (
                        <For each={props.product.platformNames}>
                            {(platform) => {
                                const p = platform as
                                    | 'windows'
                                    | 'macosx'
                                    | 'linux';
                                return PlatformIcons[p];
                            }}
                        </For>
                    )}
                </div>
            </div>
        </A>
    );
}
