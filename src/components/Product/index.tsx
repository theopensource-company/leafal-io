import { SurrealQuery } from '~/library/Surreal';
import { TProductRecord } from '~/library/Types/Product.types';

export async function getProduct(slug: string): Promise<TProductRecord | null> {
    const result = await SurrealQuery<TProductRecord>(
        `SELECT * FROM product WHERE slug=$slug`,
        { slug }
    );
    return result[0].result ? result[0].result[0] || null : null;
}
