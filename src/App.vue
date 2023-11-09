<script setup lang="ts">
    import Navbar from '@/components/nav/Navbar.vue';
    import NavbarLink from '@/components/nav/NavbarLink.vue';
    import Account from '@/components/nav/Account.vue';
    import Logo from '@/components/brand/Logo.vue';
    import { RouterLink, RouterView, useRoute } from 'vue-router';
    import TextInput from './components/input/TextInput.vue';
    import { ref } from 'vue';
    import { Home, Compass, Archive } from 'lucide-vue-next';

    const route = useRoute();

    const search = ref('');
</script>

<template>
    <metainfo>
        <template #title="{ content }">{{
            (content && `${content} - `) + `leafal.io`
        }}</template>
        <template #description="{ content }">{{ content }}</template>
    </metainfo>
    <div class="wrapper">
        <aside>
            <RouterLink to="/" class="logo-link">
                <Logo />
            </RouterLink>
            <Navbar>
                <NavbarLink path="/">
                    <template #icon><Home /></template>
                    Home
                </NavbarLink>
                <NavbarLink path="/discover">
                    <template #icon><Compass /></template>
                    Discover
                </NavbarLink>
                <NavbarLink path="/library">
                    <template #icon><Archive /></template>
                    Library
                </NavbarLink>
            </Navbar>
        </aside>
        <div class="search">
            <TextInput
                v-model="search"
                class="search-bar"
                placeholder="Search..."
            />
        </div>
        <RouterView :key="route.fullPath" class="view" />
        <Account class="account" />
    </div>
</template>

<style scoped lang="scss">
    .wrapper {
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        grid-template-rows: 3rem auto;
        align-items: start;
        gap: 3rem;
        margin: 2rem auto;
        padding: 0 2rem;
        max-width: 170vh;

        aside {
            grid-column: 1;
            grid-row: span 2;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            font-size: 18px;

            position: sticky;
            top: 2rem;

            min-height: 20em;
        }

        .search {
            grid-column: 2;
            grid-row: 1;

            position: sticky;
            top: 2rem;
            z-index: 1001;

            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: stretch;

            .search-bar {
                line-height: 2em;
                max-width: 500px;
            }
        }

        .view {
            grid-column: span 2;
        }

        .account {
            grid-column: 3;
            grid-row: 1;

            position: sticky;
            top: 2rem;
            z-index: 1001;
        }
    }

    .logo-link {
        display: flex;
        font-size: 3rem;
        height: max-content;
        text-decoration: none;
    }
</style>
