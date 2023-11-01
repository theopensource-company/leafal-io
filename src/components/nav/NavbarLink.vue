<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import VueFeather from 'vue-feather';

    const { path } = defineProps<{
        path: string;
        icon?: string;
    }>();
</script>

<template>
    <RouterLink :to="path" class="link" v-bind="$attrs">
        <div v-if="icon" class="icon">
            <VueFeather :type="icon" />
        </div>
        <slot />
    </RouterLink>
</template>

<style scoped lang="scss">
    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        vertical-align: middle;
        gap: 1em;
        max-width: max-content;
        color: var(--light2);
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover,
        &.router-link-exact-active {
            color: var(--light);
        }

        .icon {
            line-height: 1em;
        }
    }
</style>
