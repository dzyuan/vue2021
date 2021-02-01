
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue';
import axios from 'axios';
import vueaxios from 'vue-axios';

import store from './store';
import router from './router';


createApp(App).use(store).use(router).use(ElementPlus).use(vueaxios, axios).mount('#app');
//createApp(App).use(store).use(router).use(ElementPlus).mount('#app');

