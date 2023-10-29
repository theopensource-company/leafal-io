<script setup lang="ts">
    import Prelaunch from '@/components/Prelaunch.vue';
    import StoreGrid from '@/components/store/StoreGrid.vue';
    import StoreItem from '@/components/store/StoreItem.vue';
    import { useFeatureFlags } from '@/library/featureFlags';
    const [flags] = useFeatureFlags()

    const demoItem = {
        slug: 'celesteia',
        title: 'Celesteia',
        thumbnail: 'https://celesteia.com/images/thumbnail.jpg'
    };
</script>

<template>
    <Prelaunch v-if="flags.preLaunch" />
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
        width: 1200px;
        max-width: 80vw;
        margin: 2em auto;
    }
</style>