<script setup lang="ts">
    import Prelaunch from '@/components/Prelaunch.vue';
    const prelaunch = import.meta.env.VITE_PRELAUNCH == 'true';
</script>

<template>
    <Prelaunch v-if="prelaunch" />
</template>