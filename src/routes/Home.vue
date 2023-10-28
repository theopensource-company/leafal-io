<script setup lang="ts">
    import Prelaunch from '@/components/Prelaunch.vue';
    import StoreGrid from '@/components/store/StoreGrid.vue';
    import StoreItem from '@/components/store/StoreItem.vue';
    const prelaunch = import.meta.env.VITE_PRELAUNCH == 'true';
</script>

<template>
    <Prelaunch v-if="prelaunch" />
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
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>