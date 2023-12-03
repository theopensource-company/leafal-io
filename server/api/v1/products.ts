import { Product } from "~/constants/types/Product.types";
import { connectDatabase } from "~/server/functions/database";

export default defineEventHandler(async (event) => {
    try {
        const database = await connectDatabase()
        const products = await database.query('SELECT * FROM product')

        if (!products) throw { 'error': 'No products found', 'status': 404 }
        
        setResponseStatus(event, 200)
        return products[0];
    } catch (e: unknown) {
        const error = e as { error: any, status: number }
        setResponseStatus(event, error.status)
        return e
    }
});
