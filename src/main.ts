import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import DiscoverVue from './routes/Discover.vue';
import HomeVue from './routes/Home.vue';
import LibraryVue from './routes/Library.vue';
import './style.css';
import { database, query } from '@/library/surreal';
import userQuery from './constants/types/User.types';

database.connect("http://127.0.0.1:14001", {
    namespace: 'leafal_io',
    database: 'leafal_io_test'
});

const testDatabase = async () => {
    await query(userQuery).then((result) => console.log("create user table:", result));
    await query("DELETE user WHERE username='leafal'").then((result) => console.log("remove previous test user:", result));
    await query("CREATE user CONTENT { username: 'leafal', email: 'hello@leafal.io', password: crypto::argon2::generate('test') }").then((result) => console.log("make new user:", result));
    await query("select * from user").then((result) => console.log("select all users:", result));  
    await query("DEFINE SCOPE user SESSION 30d SIGNIN (SELECT * FROM user WHERE (username = $identifier OR email = $identifier) AND crypto::argon2::compare(password, $password))").then((result) => console.log("define user scope:", result));
    await database.signin({ scope: 'user', identifier: 'leafal', password: 'test' });
    await query("SELECT * FROM user WHERE id = $auth.id").then((result) => console.log("get signed in user:", result))
}

testDatabase();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeVue },
        { path: '/discover', component: DiscoverVue },
        { path: '/library', component: LibraryVue },
        {
            path: '/product/:id',
            component: () => {
                console.log('To-do');
            },
        },
    ],
});

createApp(App).use(router).use(createMetaManager()).mount('#app');
