import { MockupProduct } from 'constants/Types/Products.types';
import { JSX, splitProps } from 'solid-js';
import style from '~/styles/components/Product/Banner.module.scss';

export type BannerProps = {
    product: MockupProduct;
};

export function ProductBanner(
    _props: JSX.HTMLElementTags['div'] & BannerProps
) {
    const [props, rest] = splitProps(_props, ['product']);

    return (
        <div class={style.banner}>
            <div class={style.slide} {...rest}>
                <div class={style.background}>
                    <img src={props.product.background} />
                </div>
                <div class={style.foreground}>{_props.children}</div>
            </div>
        </div>
    );
}
