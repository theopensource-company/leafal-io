import { useDatabase } from '~/composables/useDatabase';
import type { Product } from '~/constants/types/Product.types';

export const useProduct = async (slug: string) =>
    new Promise((resolve, reject) => {
        useDatabase()
            .then(async (c) =>
                resolve(
                    (
                        await c.query<[Product[]]>(
                            'SELECT * FROM product WHERE slug = $slug',
                            { slug }
                        )
                    )[0][0]
                )
            )
            .catch(reject);
    });

export const useProducts = async () =>
    new Promise((resolve, reject) => {
        useDatabase()
            .then(async (c) =>
                resolve(
                    (await c.query<[Product[]]>('SELECT * FROM product'))[0]
                )
            )
            .catch(reject);
    });
