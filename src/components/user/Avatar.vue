<script setup lang="ts">
const { user } = defineProps<{
    user?: {
        avatar?: string;
    };
}>();
</script>

<template>
    <div class="avatar" v-bind="$attrs">
        <img :src="(user && user.avatar) ?? '/default.svg'" class="avatar" />
    </div>
</template>

<style scoped>
.avatar {
    border-radius: 50%;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
}
</style>
