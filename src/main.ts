import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import DiscoverVue from './routes/Discover.vue';
import HomeVue from './routes/Home.vue';
import LibraryVue from './routes/Library.vue';
import './style.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeVue },
        { path: '/discover', component: DiscoverVue },
        { path: '/library', component: LibraryVue },
    ],
});

createApp(App).use(router).use(createMetaManager()).mount('#app');
