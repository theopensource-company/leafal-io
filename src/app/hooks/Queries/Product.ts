'use client';
import { SurrealInstance as surreal } from '@/app/lib/Surreal';
import { TProductRecord } from '@/constants/types/Product.types';
import { useQuery } from '@tanstack/react-query';

export function processProductRecord({
    pricingText: _,
    pricing,
    ...rest
}: TProductRecord) {
    return {
        pricingText: +pricing == 0 ? 'Free' : `${(+pricing).toFixed(2)}`,
        pricing,
        ...rest,
    };
}

export const getProduct = async (slug: string) => {
    const result = await surreal.query<[TProductRecord[]]>(
        /* surrealql */ `
            SELECT *, 
                array::distinct(platforms.*.name) AS platformNames
            FROM product
            WHERE slug=$slug
            FETCH platforms.*;
        `,
        { slug }
    );

    if (!result?.[0]?.result?.[0]) return null;
    return processProductRecord(result[0].result[0]);
};

export const useStoreProduct = (slug: TProductRecord['slug']) =>
    useQuery({
        queryKey: ['products', slug],
        queryFn: () => getProduct(slug),
    });
