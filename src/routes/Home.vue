<script setup lang="ts">
    import Prelaunch from '@/components/Prelaunch.vue';
    import StoreGrid from '@/components/store/StoreGrid.vue';
    import StoreItem from '@/components/store/StoreItem.vue';
    import { useFeatureFlags } from '@/library/featureFlags';
    const [flags] = useFeatureFlags();
</script>

<template>
    <Prelaunch v-if="flags.preLaunch" />
    <div v-else>
        <div class="wrap">
            <StoreGrid>
                <StoreItem size="big" />
                <StoreItem />
                <StoreItem />
                <StoreItem />
                <StoreItem />
                <StoreItem />
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
