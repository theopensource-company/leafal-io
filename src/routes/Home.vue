<script setup lang="ts">
    import Prelaunch from '@/components/Prelaunch.vue';
    import StoreGrid from '@/components/store/StoreGrid.vue';
    import StoreItem from '@/components/store/StoreItem.vue';
    import { useFeatureFlags } from '@/library/featureFlags';
    const [flags] = useFeatureFlags();

    const demoItem = {
        slug: 'celesteia',
        title: 'Celesteia',
        thumbnail: 'https://celesteia.com/images/thumbnail.jpg',
    };
</script>

<template>
    <Prelaunch v-if="flags.preLaunch" />
    <div v-else>
        <div class="wrap">
            <StoreGrid v-for="n in 10" :key="n">
                <StoreItem size="big" :item="demoItem" />
                <StoreItem :item="demoItem" />
                <StoreItem :item="demoItem" />
                <StoreItem :item="demoItem" />
                <StoreItem :item="demoItem" />
                <StoreItem :item="demoItem" />
            </StoreGrid>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .wrap {
        display: grid;
        gap: 1em;
        grid-column: span 2;
        grid-template-columns: subgrid;
    }
</style>
