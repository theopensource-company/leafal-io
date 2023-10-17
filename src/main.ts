import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createMetaManager } from 'vue-meta';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('@/routes/Home.vue') }
    ]
})

createApp(App)
    .use(router)
    .use(createMetaManager())
    .mount('#app');