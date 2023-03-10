import { A } from '@solidjs/router';
import { MockupProduct } from 'constants/Types/Products.types';
import { splitProps } from 'solid-js';
import style from '~/styles/components/Product/Summary.module.scss';
import { ProductBanner } from './Banner';

export type SummaryProps = {
    product: MockupProduct;
};

export function ProductSummary(_props: SummaryProps) {
    const [props, rest] = splitProps(_props, ['product']);
    return (
        <>
            <ProductBanner
                interactive={true}
                product={props.product}
                {...rest}
            />
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
                </div>
            </A>
        </>
    );
}
