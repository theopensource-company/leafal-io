<script setup lang="ts">
    import { Product } from '~/constants/types/Product.types';

    const route = useRoute();
    const { data: result } = await useFetch(`/api/v1/product?slug=${route.params.slug}`);
    
    if (!result.value) throw createError({ statusCode: 404, statusMessage: 'Product not found.' });
    
    const product = Product.parse(result.value);

    useSeoMeta({
        // Standard
        title: product.title,
        description: product.description,

        // OpenGraph
        ogTitle: product.title,
        ogDescription: product.description,
        ogImage: product.thumbnail,
        ogUrl: `https://www.leafal.io${route.fullPath}`,

        // Twitter
        twitterTitle: product.title,
        twitterDescription: product.description,
        twitterImage: product.thumbnail,
        twitterCard: 'summary'
    })
</script>

<template>
    <main>
        <div class="product">
            <h1>{{ product.title }}</h1>

            <div class="slideshow"></div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    .product {
        margin: 2rem auto;
        position: relative;
        z-index: 5;
        max-width: 90vw;
    }
</style>