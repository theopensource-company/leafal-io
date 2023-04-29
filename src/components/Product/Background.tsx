import { JSX, splitProps } from 'solid-js';
import { TProductRecord } from '~/library/Types/Product.types';
import style from '~/styles/components/Product/Background.module.scss';

export type ProductBackgroundProps = {
    interactive?: boolean;
    product: TProductRecord;
};

export function ProductBackground(
    _props: JSX.HTMLElementTags['div'] & ProductBackgroundProps
) {
    const [props, rest] = splitProps(_props, ['interactive', 'product']);

    return (
        <div class={style.background}>
            <div class={style.image} {...rest}>
                <img src={props.product.background} />
            </div>
        </div>
    );
}
