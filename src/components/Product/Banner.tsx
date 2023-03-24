import { cva } from 'cva';
import { JSX, splitProps } from 'solid-js';
import { TProductRecord } from '~/library/Types/Product.types';
import style from '~/styles/components/Product/Banner.module.scss';

export const bannerStyle = cva([style.banner], {
    variants: {
        intent: {
            default: [],
            interactive: [style.interactive],
        },
    },
    defaultVariants: {
        intent: 'default',
    },
});

export type BannerProps = {
    interactive?: boolean;
    product: TProductRecord;
};

export function ProductBanner(
    _props: JSX.HTMLElementTags['div'] & BannerProps
) {
    const [props, rest] = splitProps(_props, ['interactive', 'product']);

    return (
        <div
            class={bannerStyle({
                intent: props.interactive ? 'interactive' : 'default',
            })}
        >
            <div class={style.slide} {...rest}>
                <div class={style.background}>
                    <img src={props.product.background} />
                </div>
            </div>
        </div>
    );
}
