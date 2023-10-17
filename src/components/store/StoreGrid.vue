<script setup lang="ts"></script>

<template>
    <div class="grid">
        <slot />
    </div>
</template>

<style scoped lang="scss">
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 16fr);
        grid-template-rows: repeat(3, 9fr);

        aspect-ratio: 16 / 9;
        gap: 1em;
    }
</style>