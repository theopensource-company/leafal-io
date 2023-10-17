import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createMetaManager } from 'vue-meta';
import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from './routes/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeVue }
    ]
})

createApp(App)
    .use(router)
    .use(createMetaManager())
    .mount('#app');