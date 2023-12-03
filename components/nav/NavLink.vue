<script setup lang="ts">
    const { path } = defineProps<{
        path: string;
    }>();
</script>

<template>
    <NuxtLink :to="path" class="link" v-bind="$attrs">
        <slot />
    </NuxtLink>
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

        .iconContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1em;
            aspect-ratio: 1;
            padding: 0.5em;
            background-color: #33333355;
            color: #555;
            transition: inherit;
            border-radius: 50%;

            .icon {
                filter: opacity(70%);
            }
        }

        &:hover,
        &.router-link-exact-active {
            color: var(--light);
            & .iconContainer {
                color: var(--theme);
            }
        }
    }
</style>