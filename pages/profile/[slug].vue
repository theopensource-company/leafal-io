<script setup lang="ts">
    import { PublicUser } from '~/constants/types/User.types'

    const route = useRoute();
    const { data: result } = await useFetch(`/api/v1/profile?username=${route.params.slug}`);
    
    if (!result.value) throw createError({ statusCode: 404, statusMessage: 'User not found.' });
    
    const user = PublicUser.parse(result.value);

    useSeoMeta({
        // Standard
        title: user.profile.displayname ?? user.username,
        description: '',

        // OpenGraph
        ogTitle: user.profile.displayname ?? user.username,
        ogDescription: '',
        ogImage: user.avatar ?? 'https://leafal.io/default.svg',
        ogUrl: `https://www.leafal.io${route.fullPath}`,

        // Twitter
        twitterTitle: user.profile.displayname ?? user.username,
        twitterDescription: '',
        twitterImage: user.avatar ?? 'https://leafal.io/default.svg',
        twitterCard: 'summary'
    })
</script>

<template>
    <main>
        <div class="user">
            <h1>{{ user.profile.displayname ?? user.username }}</h1>
        </div>
    </main>
</template>

<style scoped lang="scss">
    .user {
        margin: 2rem auto;
        position: relative;
        z-index: 5;
        max-width: 90vw;
    }
</style>