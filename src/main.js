import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import home from './pages/home.vue';
import about from './pages/about.vue';
import keji from './pages/keji.vue';
import web from './pages/web.vue';
import web3d from './pages/web3d.vue';
import bim from './pages/bim.vue';
import player from './pages/player.vue';
import projectlist from './pages/project/list.vue';
import addproject from './pages/project/add.vue';
import App from './App.vue'
import axios from 'axios'
import vueaxios from 'vue-axios'

import {createRouter,createWebHistory}  from 'vue-router'
import store from './store'
//import './plugins/element.js'
const router =createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:home},
        {path:'/about',component:about},
        {path:'/web',component:web},
        {path:'/web3d',component:web3d},
        {path:'/bim',component:bim},
        {path:'/keji',component:keji},
        {path:'/player',component:player},
        {path:'/projectlist',component:projectlist},
        {path:'/addproject',component:addproject},
    ]
})

createApp(App).use(store).use(router).use(ElementPlus).use(vueaxios, axios).mount('#app')
