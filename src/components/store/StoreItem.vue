<script setup lang="ts">
    const { item, size } = defineProps(['item', 'size']);
</script>

<template>
    <RouterLink :to="(item && item.slug) ?? ''" :class="['item', size ?? 'small']">
    </RouterLink>
</template>

<style scoped lang="scss">
    .item {
        border-radius: 1em;
        background-color: var(--dark2);
    }

    .big {
        grid-column: span 2;
        grid-row: span 2;
    }

    .small {
        grid-column: span 1;
        grid-row: span 1;
    }
</style>