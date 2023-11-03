<script setup lang="ts">
    import { useFeatureFlags } from '@/library/featureFlags';
    const [flags] = useFeatureFlags();
</script>

<template>
    <Prelaunch v-if="flags.preLaunch" />
</template>

<style scoped lang="scss"></style>
