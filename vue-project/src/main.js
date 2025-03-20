import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.provide('app-message', 'app message 입니다.');
app.provide('msg', 'hello msg');
app.mount('#app');
app.config.globalProperties.msg = 'hello';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
