import { For, Show, createEffect, createSignal } from 'solid-js';
import { Title } from 'solid-start';
import { getProduct, getProducts } from '~/components/Product';
import { ProductCard } from '~/components/Product/Card';
import { ProductCarousel } from '~/components/Product/Carousel';
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
        getProduct('celesteia').then((res) => setShowcasedProduct(res))
    );
    createEffect(() => getProducts().then((res) => setAllProducts(res)));

    const resolvedProduct = () => showcasedProduct() as TProductRecord;

    return (
        <>
            <Title>{standardTitle}</Title>
            <Show when={showcasedProduct()}>
                <ProductSummary product={resolvedProduct()} />
            </Show>

            <ProductCarousel>
                <For each={allProducts()}>
                    {(product) => (
                        <>
                            <ProductCard product={product} size="normal" />
                        </>
                    )}
                </For>
            </ProductCarousel>
        </>
    );
}
