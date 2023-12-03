<script setup lang="ts">
useHead({
    titleTemplate: (title) => title ? `${title} - leafal.io` : 'leafal.io',
    link: [{ rel: 'shortcut icon', href: '/logo.svg' }],
    meta: [{ name: 'icon', content: '/logo.svg' }, { name: 'lang', content: 'en-us' }],
})

useSeoMeta({
    description: 'Discover new experiences, and share your greatest moments with the community.',

    // OpenGraph
    ogTitle: 'leafal.io',
    ogDescription: 'Discover new experiences, and share your greatest moments with the community.',
    ogImage: '/touch_icon_192x192.png',
    ogUrl: `https://www.leafal.io/`,

    // Twitter
    twitterTitle: 'leafal.io',
    twitterDescription: 'Discover new experiences, and share your greatest moments with the community.',
    twitterImage: '/touch_icon_192x192.png',
    twitterCard: 'app'
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
