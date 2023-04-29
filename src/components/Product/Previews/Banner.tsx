import { A } from '@solidjs/router';
import { JSX, splitProps } from 'solid-js';
import style from '~/styles/components/Product/Previews/Banner.module.scss';
import { ProductPreviewProps } from '.';
import { getHumanPrice } from '..';
import { MainWrapper } from '../../Layout/MainWrapper';
import { ProductBackground } from '../Background';
import { ProductPlatforms } from '../Platforms';

export function ProductBannerPreview(
    _props: ProductPreviewProps & JSX.HTMLElementTags['a']
) {
    const [props, rest] = splitProps(_props, ['product']);

    return (
        <>
            {!!props.product && (
                <>
                    <ProductBackground
                        interactive={true}
                        product={props.product}
                    />
                    <MainWrapper>
                        <A
                            href={`/store/${props.product.slug}`}
                            class={style.details}
                            {...rest}
                        >
                            <div class={style.thumbnail}>
                                <img src={props.product.thumbnail} alt="" />
                            </div>

                            <div class={style.text}>
                                <span class={style.title}>
                                    {props.product.title}
                                </span>

                                <p class={style.description}>
                                    {props.product.tagline}
                                </p>

                                <span class={style.specifications}>
                                    <span class={style.pricing}>
                                        {getHumanPrice(props.product)}
                                    </span>
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
