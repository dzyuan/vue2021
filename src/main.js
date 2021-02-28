
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue';
import axios from 'axios';
import vueaxios from 'vue-axios';

import store from './store';
import router from './router';
// if (process.env.NODE_ENV === 'development') {
//     if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
//         // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
//         window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App
//     }
// App.config.devtools = true
// }

createApp(App).use(store).use(router).use(ElementPlus).use(vueaxios, axios).mount('#app');
//createApp(App).use(store).use(router).use(ElementPlus).mount('#app');
