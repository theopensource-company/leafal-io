import { SurrealInstance as surreal } from '@/app/lib/Surreal';
import { TProductRecord } from '@/constants/types/Product.types';
import { useQuery } from '@tanstack/react-query';

export function processProductRecord({ pricing, ...rest }: TProductRecord) {
    return {
        pricing: +pricing == 0 ? 'Free' : `${(+pricing).toFixed(2)}`,
        ...rest,
    };
}

export const useStoreProduct = (slug?: TProductRecord['slug']) =>
    useQuery({
        queryKey: ['products', slug],
        queryFn: async () => {
            const result = await surreal.query<[TProductRecord[]]>(
                `SELECT *, array::distinct(platforms.*.name) AS platformNames FROM product WHERE slug=$slug FETCH platforms.*;`,
                { slug }
            );

            if (!result?.[0]?.result?.[0]) return null;
            return processProductRecord(result[0].result[0]);
        },
    });
