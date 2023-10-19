<script setup lang="ts">
    import Prelaunch from '@/components/Prelaunch.vue';
    import StoreGrid from '@/components/store/StoreGrid.vue';
    import StoreItem from '@/components/store/StoreItem.vue';
import { featureFlags } from '@/library/featureFlags';
    const prelaunch = featureFlags.store.preLaunch;

    const demoItem = {
        slug: 'celesteia',
        title: 'Celesteia',
        thumbnail: 'https://celesteia.com/images/thumbnail.jpg'
    };
</script>

<template>
    <Prelaunch v-if="prelaunch" />
    <div v-else>
        <div class="wrap">
            <StoreGrid>
                <StoreItem size="big" :item="demoItem" />
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
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>