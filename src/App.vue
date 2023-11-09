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
        <header>
            <RouterLink to="/" class="logo-link">
                <Logo />
            </RouterLink>

            <div class="search">
                <TextInput
                    v-model="search"
                    class="search-bar"
                    placeholder="Search..."
                />
            </div>
            <Account class="account" />
        </header>
        <aside>
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
        <RouterView :key="route.fullPath" class="view" />
    </div>
</template>

<style scoped lang="scss">
    .wrapper {
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        grid-template-rows: auto auto;
        align-items: start;
        padding: 0;

        header {
            grid-column: span 3;
            backdrop-filter: blur(16px) brightness(30%);
            background-color: var(--light-frosted);
            border-bottom: 1px solid var(--dark2);
            display: grid;
            grid-template-columns: subgrid;
            padding: 1.5rem;
            position: sticky;
            top: 0;
            z-index: 1001;
        }

        aside {
            grid-column: 1;
            grid-row: span 2;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 2rem;

            font-size: 18px;

            position: sticky;
            top: 6rem;

            height: calc(100svh - 7rem);

            backdrop-filter: blur(16px) brightness(30%);
            background-color: var(--light-frosted);
            border-right: 1px solid var(--dark2);
        }

        .search {
            grid-column: 2;
            grid-row: 1;

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
            display: grid;
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row: 2;
            grid-template-columns: subgrid;
            margin: 1rem;
        }

        .account {
            grid-column: 3;
            grid-row: 1;
        }
    }

    .logo-link {
        display: flex;
        font-size: 3rem;
        height: max-content;
        text-decoration: none;
    }
</style>
