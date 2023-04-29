import { For, Show, createEffect, createSignal } from 'solid-js';
import { Title } from 'solid-start';
import { getProducts, getProductsWithTaglines } from '~/components/Product';
import {
    ProductColumnPreview,
    ProductColumnPreviewCarousel,
} from '~/components/Product/Previews/Column';
import { ProductSummary } from '~/components/Product/Summary';
import { TProductRecord } from '~/library/Types/Product.types';

export default function Home() {
    const standardTitle = 'leafal.io';

    const [showcasedProduct, setShowcasedProduct] = createSignal<
        TProductRecord | undefined | null
    >(undefined);
    const [allProducts, setAllProducts] = createSignal<
        TProductRecord[] | undefined | null
    >(undefined);

    createEffect(() =>
        getProductsWithTaglines().then(
            (res) => !!res && setShowcasedProduct(res[0])
        )
    );
    createEffect(() => getProducts().then((res) => setAllProducts(res)));

    const resolvedProduct = () => showcasedProduct() as TProductRecord;

    return (
        <>
            <Title>{standardTitle}</Title>
            <Show when={showcasedProduct()}>
                <ProductSummary product={resolvedProduct()} />
            </Show>

            <ProductColumnPreviewCarousel>
                <For each={allProducts()}>
                    {(product) => (
                        <>
                            <ProductColumnPreview
                                product={product}
                                size="normal"
                            />
                        </>
                    )}
                </For>
            </ProductColumnPreviewCarousel>
        </>
    );
}
