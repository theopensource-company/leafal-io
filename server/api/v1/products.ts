import { useProducts } from "~/composables/queries/Products.queries"

export default defineEventHandler(async (event) => {
    try {
        const products = await useProducts();
        setResponseStatus(event, 200)
        return products;
    } catch (e) {
        setResponseStatus(event, 500)
        return { 'error': e }
    }
})