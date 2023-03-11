import { MockupProduct } from 'constants/Types/Products.types';
import { splitProps } from 'solid-js';
import style from '~/styles/components/Product/Overview.module.scss';
import { ProductBanner } from './Banner';
import { ReceptionBar } from './ReceptionBar';

export type SummaryProps = {
    product: MockupProduct;
};

export function ProductOverview(_props: SummaryProps) {
    const [props, rest] = splitProps(_props, ['product']);
    return (
        <>
            <ProductBanner
                product={props.product}
                interactive={false}
                {...rest}
            />
            <div class={style.details} tabIndex="0">
                <div class={style.showcase} />
                <div class={style.overview}>
                    <div class={style.thumbnail}>
                        <img src={props.product.thumbnail} />
                    </div>
                    <div class={style.public}>
                        {props.product.reception && (
                            <ReceptionBar rating={props.product.reception} />
                        )}
                    </div>
                    <div class={style.content}>
                        <p class={style.text}>{props.product.overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
