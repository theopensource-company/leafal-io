import { cva } from 'cva';
import { JSX, splitProps } from 'solid-js';
import { A } from 'solid-start';
import { TProductRecord } from '~/library/Types/Product.types';

import style from '~/styles/components/Product/Previews/Column.module.scss';
import { ProductPlatforms } from '../Platforms';

export type ProductColumnPreviewCarouselProps = {
    heading?: string;
};

export function ProductColumnPreviewCarousel(
    _props: ProductColumnPreviewCarouselProps & JSX.HTMLElementTags['div']
) {
    const [props, rest] = splitProps(_props, ['heading']);
    return (
        <>
            <div class={style.carousel}>
                {!!props.heading && <h1>{props.heading}</h1>}
                <div class={style.carouselGrid} {...rest} />
            </div>
        </>
    );
}

export type ProductColumnPreviewProps = {
    product: TProductRecord;
    size: 'large' | 'normal' | 'small';
};

export const columnPreviewStyle = cva([style.default], {
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

export function ProductColumnPreview(
    _props: ProductColumnPreviewProps & JSX.HTMLElementTags['a']
) {
    const [props, rest] = splitProps(_props, ['product', 'size']);

    const price = () =>
        props.product.pricing == 0 ? 'Free' : props.product.pricing.toFixed(2);

    return (
        <A
            href={`/store/${props.product.slug}`}
            class={columnPreviewStyle({
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

                {props.product.platformNames && (
                    <ProductPlatforms
                        class={style.platforms}
                        platformNames={props.product.platformNames}
                    />
                )}
            </div>
        </A>
    );
}
