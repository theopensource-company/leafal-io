<script setup lang="ts">
    import Navbar from '@/components/nav/Navbar.vue';
    import NavbarLink from '@/components/nav/NavbarLink.vue';
    import Account from '@/components/nav/Account.vue';
    import Logo from '@/components/brand/Logo.vue';
    import { RouterLink, RouterView, useRoute } from 'vue-router';
    import TextInput from './components/input/TextInput.vue';
    import { ref } from 'vue';
    const route = useRoute();

    const search = ref('');
</script>

<template>
    <metainfo>
        <template #title="{ content }">{{ (content && `${content} - `) + `leafal.io` }}</template>
        <template #description="{ content }">{{ content }}</template>
    </metainfo>
    <div class="wrapper">
        <aside>
            <RouterLink to="/" class="logo-link">
                <Logo />
            </RouterLink>
            <Navbar>
                <NavbarLink path="/" icon="home">Home</NavbarLink>
                <NavbarLink path="/discover" icon="compass">Discover</NavbarLink>
                <NavbarLink path="/library" icon="archive">Library</NavbarLink>
            </Navbar>
        </aside>
        <div class="search">
            <TextInput class="search-bar" v-model="search" placeholder="Search..." />
        </div>
        <RouterView class="view" :key="route.fullPath" />
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
        max-width: 170vh;

        aside {
            grid-column: 1;
            grid-row: span 2;
            grid-template-rows: subgrid;
            display: grid;
            
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

            .search-bar { line-height: 2em; max-width: 500px; }
        }

        .view {
            display: grid;
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row: 2;
            grid-template-columns: subgrid;
            margin: .5rem;
        }

        .account {
            grid-column: 3;
            grid-row: 1;

            position: sticky;
            top: 2rem;
        }
    }

    .logo-link {
        font-size: 3rem;
        text-decoration: none;
    }
</style>
