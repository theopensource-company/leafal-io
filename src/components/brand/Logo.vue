<script setup lang="ts">
    import LogoVector from '@/components/brand/LogoVector.vue';
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
        gap: 1em;
        color: var(--light);
        text-decoration: none;
    }

    .vector {
        width: 3em;
        height: 3em;
    }

    .text {
        font-size: 2em;
        font-weight: 700;
    }
</style>
