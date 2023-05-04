import { cva } from 'cva';
import { JSX, splitProps } from 'solid-js';
import { A } from 'solid-start';
import style from '~/styles/components/Product/Previews/Column.module.scss';
import { ProductPreviewProps } from '.';
import { getHumanPrice } from '..';
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
    _props: ProductPreviewProps &
        ProductColumnPreviewProps &
        JSX.HTMLElementTags['a']
) {
    const [props, rest] = splitProps(_props, ['product', 'size']);

    return (
        <>
            {!!props.product && (
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
                                <span class={style.pricing}>
                                    {getHumanPrice(props.product)}
                                </span>
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
            )}
        </>
    );
}
