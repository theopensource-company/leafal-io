import { A } from '@solidjs/router';
import { JSX, splitProps } from 'solid-js';
import { TProductRecord } from '~/library/Types/Product.types';
import style from '~/styles/components/Product/Previews/Banner.module.scss';
import { MainWrapper } from '../../Layout/MainWrapper';
import { ProductBackground } from '../Background';

export type ProductBannerPreviewProps = {
    product: TProductRecord;
};

export function ProductBannerPreview(
    _props: ProductBannerPreviewProps & JSX.HTMLElementTags['div']
) {
    const [props, rest] = splitProps(_props, ['product']);

    const price = () =>
        props.product.pricing == 0 ? 'Free' : props.product.pricing.toFixed(2);

    return (
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
                        <img src={props.product.thumbnail} />
                    </div>
                    <div class={style.text}>
                        <span class={style.title}>{props.product.title}</span>
                        <p class={style.description}>{props.product.tagline}</p>
                        <span class={style.specifications}>
                            <span class={style.pricing}>{price()}</span>
                            {props.product.platformNames && (
                                <>
                                    {' • '}
                                    {props.product.platformNames.join(', ')}
                                </>
                            )}
                        </span>
                    </div>
                </A>
            </MainWrapper>
        </>
    );
}
