<script setup lang="ts">
</script>

<template>
    <div class="navbar">
        <slot />
    </div>
</template>

<style scoped lang="scss">
    .navbar {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 1.5rem;
        margin: 1rem;
    }
</style>