import { Show, createEffect, createSignal } from 'solid-js';
import { Title } from 'solid-start';
import { MainWrapper } from '~/components/Layout/MainWrapper';
import { getProduct } from '~/components/Product';
import { ProductSummary } from '~/components/Product/Summary';
import { TProductRecord } from '~/library/Types/Product.types';

export default function Home() {
    const standardTitle = 'leafal.io';
    
    const [showcasedProduct, setShowcasedProduct] = createSignal<TProductRecord | undefined | null>(undefined);

    createEffect(() => getProduct('celesteia').then((res) => setShowcasedProduct(res)));

    const resolvedProduct = () => showcasedProduct() as TProductRecord;

    return (
        <>
            <Title>{standardTitle}</Title>
                <Show when={showcasedProduct()}>
                    <ProductSummary product={resolvedProduct()} />
                </Show>
            <MainWrapper />
        </>
    );
}
