<script setup lang="ts">
    import Prelaunch from '@/components/Prelaunch.vue';
    import { useFeatureFlags } from '@/library/featureFlags';
    const [flags] = useFeatureFlags();
</script>

<template>
    <Prelaunch v-if="flags.preLaunch" />
</template>

<style scoped lang="scss"></style>
