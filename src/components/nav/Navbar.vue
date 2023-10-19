<script setup lang="ts"></script>

<template>
    <div class="navbar">
        <slot />
    </div>
</template>

<style scoped lang="scss">
    .navbar {
        display: flex;
        flex-direction: row;
        gap: 3em;
        height: 5em;

        align-items: center;
    }
</style>
