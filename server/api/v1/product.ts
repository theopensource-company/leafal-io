import { Product } from "~/constants/types/Product.types";
import { connectDatabase } from "~/server/functions/database";

export default defineEventHandler(async (event) => {
    try {
        const slug = getQuery(event)['slug'];
        if (!slug) throw { message: 'No slug provided.' };

        const database = await connectDatabase()
        const products = await database.query<[Product[]]>('SELECT * FROM product WHERE slug = $slug', { slug })

        if (!products) throw {'error': 'Product not found', 'status': 404}
        
        setResponseStatus(event, 200)
        return products[0][0];
    } catch (e: unknown) {
        const error = e as { error: any, status: number }
        setResponseStatus(event, error.status)
        return e
    }
});
