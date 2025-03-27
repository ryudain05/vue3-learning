import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/func';
import person from './plugins/person';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(funcPlugins);
app.use(objPlugins, { name: '짐코딩' });
app.use(person, { name: '홍길동' });
app.use(person);
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// console.log('MODE: ', import.meta.env.MODE);
// console.log('BASE_URL: ', import.meta.env.BASE_URL);
// console.log('PROD: ', import.meta.env.PROD);
// console.log('DEV: ', import.meta.env.DEV);
// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);
