<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    const { path } = defineProps(['path']);
</script>

<template>
    <RouterLink :to="path" class="link">
        <slot />
    </RouterLink>
</template>

<style scoped lang="scss">
    .link {
        color: var(--light2);
        text-decoration: none;
        transition: color .2s ease;

        &:hover { color: var(--light); }
    }
</style>