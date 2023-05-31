'use client';
import * as React from 'react';

import { ProductPreviewBanner } from './components/Product/Previews';
import { useStoreProduct } from './hooks/Queries/Product';

export default function Home() {
    const { data: product } = useStoreProduct('celesteia');

    return <main>{product && <ProductPreviewBanner product={product} />}</main>;
}
