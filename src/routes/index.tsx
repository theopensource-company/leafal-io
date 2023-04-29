import { For, createEffect, createSignal } from 'solid-js';
import { Title } from 'solid-start';
import {
    getProductsWithTaglines,
    getRecentlyUpdatedProducts,
} from '~/components/Product';
import { ProductBannerPreview } from '~/components/Product/Previews/Banner';
import {
    ProductColumnPreview,
    ProductColumnPreviewCarousel,
} from '~/components/Product/Previews/Column';
import { TProductRecord } from '~/library/Types/Product.types';

export default function Home() {
    const standardTitle = 'leafal.io';

    const [showcased, setShowcased] = createSignal<TProductRecord>();
    const [recent, setRecent] = createSignal<TProductRecord[]>();

    createEffect(() => {
        getProductsWithTaglines().then((products) => {
            console.log(products);

            setShowcased(products ? products[0] : undefined);
        });

        getRecentlyUpdatedProducts().then((r) => !!r && setRecent(r));
    });

    return (
        <>
            <Title>{standardTitle}</Title>

            <ProductBannerPreview product={showcased()} />

            {!!recent() && (
                <ProductColumnPreviewCarousel heading={'Recently Updated'}>
                    <For each={recent()}>
                        {(p) => (
                            <ProductColumnPreview product={p} size="normal" />
                        )}
                    </For>
                </ProductColumnPreviewCarousel>
            )}
        </>
    );
}
