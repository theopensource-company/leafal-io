import { useProduct } from '~/composables/queries/Products.queries';

export default defineEventHandler(async (event) => {
    try {
        const slug = getQuery(event)['slug'];
        if (!slug) throw { message: 'No slug provided.' };

        const product = await useProduct(slug.toString());
        if (!product) throw { message: 'No product found.' };

        setResponseStatus(event, 200);
        return product;
    } catch (e) {
        setResponseStatus(event, 500);
        return { error: e };
    }
});
