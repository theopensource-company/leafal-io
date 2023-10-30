import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomeVue from './routes/Home.vue';
import './style.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: HomeVue }],
});

createApp(App).use(router).use(createMetaManager()).mount('#app');
