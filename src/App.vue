<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ (content && `${content} - `) + `leafal.io` }}</template>
    <template v-slot:description="{ content }">{{ content }}</template>
  </metainfo>
  <RouterView :key="route.fullPath" />
</template>
