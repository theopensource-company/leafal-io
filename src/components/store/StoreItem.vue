<script setup lang="ts">
    import { Product } from '@/constants/types/Product.types';

    const { item, size } = defineProps<{
        size?: 'small' | 'big';
        item?: Product;
    }>();
</script>

<template>
    <RouterLink
        :to="`/product/${(item && item.slug) ?? ''}`"
        :class="['item', size ?? 'small']"
    >
        <div class="thumbnail">
            <img
                :src="(item && item.thumbnail) ?? ''"
                :alt="(item && item.title) ?? ''"
            />
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
    .item {
        border-radius: 1em;
        background-color: var(--dark2);
        overflow: hidden;
        position: relative;

        .thumbnail {
            position: absolute;
            inset: 0;
            transition: transform 0.1s ease;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &:hover .thumbnail,
        &:focus .thumbnail {
            transform: scale(1.05);
            transition-duration: 0.2s;
        }
    }

    .big {
        grid-column: span 2;
        grid-row: span 2;
    }

    .small {
        grid-column: span 1;
        grid-row: span 1;
    }

    .thumbnail {
        position: absolute;
        inset: 0;
        z-index: 1;
        background-color: #000;
    }

    .details {
        position: absolute;
        inset: 0;
        top: auto;
        z-index: 2;
        background-color: var(--dark2);
        padding: 1rem;
        font-size: 1.5em;
    }
</style>
