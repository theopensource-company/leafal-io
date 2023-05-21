import * as React from 'react';

import { SurrealInstance } from '@/app/lib/Surreal';
import { TProductRecord } from '@/constants/types/Product.types';
import { Metadata } from 'next';
import { ProductShell } from '../components/ProductPage';

// TODO: Figure out metadata storage.

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    let title = 'leafal.io';

    const slug = params.slug;

    const result = await SurrealInstance.query<[TProductRecord[]]>(
        'SELECT * FROM products WHERE slug=$slug',
        { slug }
    );

    if (result?.[0].result?.[0])
        title = `${result[0].result[0].title} on leafal.io`;

    return { title };
}

export default function Product({ params }: { params: { slug: string } }) {
    return (
        <main>
            <ProductShell slug={params.slug} />
        </main>
    );
}
