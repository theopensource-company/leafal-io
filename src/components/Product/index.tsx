import { SurrealQuery } from '~/library/Surreal';
import { TProductRecord } from '~/library/Types/Product.types';

export async function getProduct(slug: string): Promise<TProductRecord | null> {
    const result = await SurrealQuery<TProductRecord>(
        `SELECT *, array::distinct(platforms.*.name) AS platformNames FROM product WHERE slug=$slug FETCH platforms.*;`,
        { slug }
    );
    return result[0].result ? result[0].result[0] || null : null;
}

export async function getProducts(): Promise<TProductRecord[] | null> {
    const result = await SurrealQuery<TProductRecord>(
        `SELECT *, array::distinct(platforms.*.name) AS platformNames FROM product FETCH platforms.*;`
    );
    return result[0].result ?? null;
}

export async function getProductsWithTaglines(): Promise<
    TProductRecord[] | null
> {
    const result = await SurrealQuery<TProductRecord>(
        `SELECT *, array::distinct(platforms.*.name) AS platformNames FROM product WHERE tagline != NONE ORDER BY RANDOM FETCH platforms.*;`
    );
    return result[0].result ?? null;
}

export async function getRecentlyUpdatedProducts(): Promise<
    TProductRecord[] | null
> {
    const result = await SurrealQuery<TProductRecord>(
        `SELECT *, array::distinct(platforms.*.name) AS platformNames FROM product WHERE tagline != NONE ORDER BY updated DESC FETCH platforms.*;`
    );
    return result[0].result ?? null;
}
