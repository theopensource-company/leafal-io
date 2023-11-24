<script setup lang="ts">
    import Prelaunch from '#/components/Prelaunch.vue';
    import StoreGrid from '#/components/store/StoreGrid.vue';
    import StoreItem from '#/components/store/StoreItem.vue';
    import { Product } from '#/constants/types/Product.types';
    import { useFeatureFlags } from '#/library/featureFlags';
    import { getAllProducts } from '#/library/queries/Product.queries';
    import { ref } from 'vue';

    const [flags] = useFeatureFlags();
    const products = ref<Product[]>();

    const loadPageContent = async () =>
        getAllProducts().then((results) => (products.value = results));

    loadPageContent();
</script>

<template>
    <Prelaunch v-if="flags.preLaunch" />
    <div v-else>
        <div v-if="products" class="wrap">
            <StoreGrid v-for="n in Math.ceil(products.length / 6)" :key="n">
                <StoreItem
                    v-for="i in products.slice((n - 1) * 6, (n - 1) * 6 + 6)
                        .length"
                    :key="products[(n - 1) * 6 + (i - 1)].slug"
                    :size="i == 1 ? 'big' : 'small'"
                    :item="products[(n - 1) * 6 + (i - 1)]"
                />
            </StoreGrid>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .wrap {
        display: grid;
        grid-column: span 2;
        grid-row: 2;
        display: grid;
        gap: 1em;
        grid-template-columns: subgrid;
    }
</style>
