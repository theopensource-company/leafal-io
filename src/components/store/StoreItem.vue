<script setup lang="ts">
    const { item, size } = defineProps<{
        size?: 'small' | 'big';
        item?: {
            slug: string;
            title: string;
            thumbnail: string;
        };
    }>();
</script>

<template>
    <RouterLink
        :to="(item && `/product/${item.slug}`) ?? ''"
        :class="['item', size ?? 'small']"
    >
        <div v-if="!!item">
            <div class="thumbnail">
                <img :src="item.thumbnail" />
            </div>
            <div class="details">
                <span class="title">{{ item.title }}</span>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
    .item {
        border-radius: 1em;
        background-color: var(--dark2);
        position: relative;
        overflow: hidden;
        color: #fff;
        text-decoration: none;

        .thumbnail {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                transform-origin: center;
                transition: transform 0.2s ease;
            }
        }

        &:hover .thumbnail img {
            transform: scale(1.05);
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
