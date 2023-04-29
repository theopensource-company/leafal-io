import { A } from '@solidjs/router';
import { JSX, splitProps } from 'solid-js';
import { TProductRecord } from '~/library/Types/Product.types';
import style from '~/styles/components/Product/Previews/Banner.module.scss';
import { MainWrapper } from '../../Layout/MainWrapper';
import { ProductBackground } from '../Background';
import { ProductPlatforms } from '../Platforms';

export type ProductBannerPreviewProps = {
    product?: TProductRecord;
};

export function ProductBannerPreview(
    _props: ProductBannerPreviewProps & JSX.HTMLElementTags['div']
) {
    const [props, rest] = splitProps(_props, ['product']);

    const price = () =>
        props.product &&
        (props.product.pricing == 0
            ? 'Free'
            : props.product.pricing.toFixed(2));

    return (
        <>
            {!!props.product && (
                <>
                    <ProductBackground
                        interactive={true}
                        product={props.product}
                        {...rest}
                    />
                    <MainWrapper>
                        <A
                            href={`/store/${props.product.slug}`}
                            class={style.details}
                            tabIndex="0"
                        >
                            <div class={style.thumbnail}>
                                <img
                                    src={props.product.thumbnail}
                                    alt={props.product.title}
                                />
                            </div>
                            <div class={style.text}>
                                <span class={style.title}>
                                    {props.product.title}
                                </span>
                                <p class={style.description}>
                                    {props.product.tagline}
                                </p>
                                <span class={style.specifications}>
                                    <span class={style.pricing}>{price()}</span>
                                    {props.product.platformNames && (
                                        <>
                                            {' • '}
                                            <ProductPlatforms
                                                style={{
                                                    display: 'inline-block',
                                                    'vertical-align': 'middle',
                                                }}
                                                platformNames={
                                                    props.product
                                                        ? props.product
                                                              .platformNames
                                                        : []
                                                }
                                            />
                                        </>
                                    )}
                                </span>
                            </div>
                        </A>
                    </MainWrapper>
                </>
            )}
        </>
    );
}
