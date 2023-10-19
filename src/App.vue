<script setup lang="ts">
import Navbar from '@/components/nav/Navbar.vue';
import NavbarLink from '@/components/nav/NavbarLink.vue';
import Account from '@/components/nav/Account.vue';
import LogoLink from '@/components/nav/LogoLink.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <metainfo>
        <template #title="{ content }">{{
            (content && `${content} - `) + `leafal.io`
        }}</template>
        <template #description="{ content }">{{ content }}</template>
    </metainfo>
    <header>
        <LogoLink />
        <Navbar>
            <NavbarLink path="/">Home</NavbarLink>
            <NavbarLink path="/">Community</NavbarLink>
            <NavbarLink path="/">Events</NavbarLink>
        </Navbar>
        <Account />
    </header>
    <RouterView :key="route.fullPath" />
</template>

<style scoped lang="scss">
header {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    margin: 0 5vw;
}
</style>
