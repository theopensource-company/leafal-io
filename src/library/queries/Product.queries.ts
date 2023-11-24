import { Product } from '#/constants/types/Product.types';
import { database } from '../surreal';

export const getAllProducts = async () => {
    const queries = await database.query<[Product[]]>('SELECT * FROM product');
    const products = queries[0];

    products.map((p) => Product.parse(p));
    return products;
};
