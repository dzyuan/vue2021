import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../pages/home.vue';
import about from '../pages/about.vue';
import keji from '../pages/keji.vue';
import zhishi from '../pages/zhishi.vue';
import web from '../pages/web.vue';
import web3d from '../pages/web3d.vue';
import bim from '../pages/bim.vue';
import player from '../pages/player.vue';
import projectlist from '../pages/project/list.vue';
import addproject from '../pages/project/add.vue';
import login from '../pages/login.vue';
import reg from '../pages/reg.vue';
import {  getUserFromLocalStorage } from '@/utils';
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', component: about },
  { path: '/web', name: 'web', component: web },
  { path: '/web3d', name: 'web3d', component: web3d },
  { path: '/bim', name: 'bim', component: bim },
  { path: '/keji', name: 'keji', component: keji },
  { path: '/zhishi', name: 'zhishi', component: zhishi },
  { path: '/player', name: 'player', component: player },
  { path: '/projectlist', name: 'projectlist', component: projectlist },
  { path: '/addproject', name: 'addproject', component: addproject },
  { path: '/login', name: 'login', component: login },
  { path: '/reg', name: 'reg', component: reg },
];

const router = createRouter({
  history: createWebHistory(),
  routes
 
});
router.beforeEach((to, from, next) => {
  
    const userInfo =getUserFromLocalStorage();

  if (!userInfo) {
    return;
  } else if (!userInfo.token || Date.now() > userInfo.expiresIn) {
    store.dispatch("clearUserInfo");
  } else {
    store.dispatch("setUserInfo", userInfo);
    const timeToLogout = userInfo.expiresIn - Date.now();
    store.dispatch("setLogoutTimer", timeToLogout);
  }



  if ((store.state.login.userInfo.userId)) {
    next();
  }
  else {
    next({ name: 'login' });

  }
});

export default router;
