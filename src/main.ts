import App from '@/App.vue';
import { database } from '@/library/surreal';
import DiscoverVue from '@/routes/Discover.vue';
import HomeVue from '@/routes/Home.vue';
import LibraryVue from '@/routes/Library.vue';
import '@/style.css';
import { createSSRApp } from 'vue';
import { createMetaManager } from 'vue-meta';
import { createRouter, createWebHistory } from 'vue-router';
import RoughAuthVue from './routes/RoughAuth.vue';

database.connect(import.meta.env.VITE_SURREAL_ENDPOINT, {
    namespace: import.meta.env.VITE_SURREAL_NAMESPACE ?? 'leafal-io',
    database:
        import.meta.env.VITE_SURREAL_DATABASE ??
        'leafal-io-deployment_' + import.meta.env.MODE,
});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeVue },
        { path: '/discover', component: DiscoverVue },
        { path: '/library', component: LibraryVue },
        { path: '/auth', component: RoughAuthVue },
        {
            path: '/product/:id',
            component: () => {
                console.log('To-do');
            },
        },
    ],
});

createSSRApp(App).use(router).use(createMetaManager()).mount('#app');
