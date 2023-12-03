<script setup lang="ts">
    import LogoVector from '~/components/brand/LogoVector.vue';
</script>

<template>
    <div class="logo">
        <LogoVector class="vector" />
        <span class="text">leafal.io</span>
    </div>
</template>

<style scoped lang="scss">
    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.33em;
        color: var(--light);
        text-decoration: none;
        font-family: 'Open Sans';
    }

    .vector {
        width: 1.25em;
        height: 1em;
    }

    .text {
        font-size: 0.75em;
        font-weight: 700;
    }
</style>