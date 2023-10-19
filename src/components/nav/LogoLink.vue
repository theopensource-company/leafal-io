<script setup lang="ts">
    import Logo from '@/components/brand/Logo.vue';
</script>

<template>
    <RouterLink to="/" class="hide-link">
        <Logo />
    </RouterLink>
</template>

<style scoped>
    .hide-link {
        color: inherit;
        text-decoration: none;
    }
</style>
