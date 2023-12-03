<script setup lang="ts">
    import z from 'zod';
    import { Product } from '~/constants/types/Product.types';

    const { data: results } = await useFetch(`/api/v1/products`);

    let products: Product[] | undefined = undefined;
    if (!!results.value) products = z.array(Product).parse(results.value);
</script>

<template>
    <div v-if="!!products" class="grid" v-for="n in Math.ceil(products.length / 6)" :key="n">
        <ProductPreview
            v-for="product in products.slice((n - 1) * 6, (n - 1) * 6 + 6)"
            :key="product.slug"
            :item="product"
        />
    </div>
</template>

<style scoped lang="scss">
    .grid {
        display: grid;
        grid-column: span 2;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);

        aspect-ratio: 16 / 9;
        gap: 1em;

        margin: 1rem;
    }
</style>