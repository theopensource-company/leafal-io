<script setup lang="ts"></script>

<template>
    <div class="grid">
        <slot />
    </div>
</template>

<style scoped lang="scss">
    .grid {
        display: grid;
        grid-column: span 2;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);

        aspect-ratio: 16 / 9;
        gap: 1em;
    }
</style>