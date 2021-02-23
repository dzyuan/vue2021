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
import projectdetails from '../pages/project/details';
import login from '../pages/login.vue';
import reg from '../pages/reg.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', component: about },
  { path: '/web', name: 'web', component: web },
  { path: '/web3d', name: 'web3d', component: web3d },
  { path: '/bim', name: 'bim', component: bim },
  { path: '/keji', name: 'keji', component: keji },
  { path: '/zhishi', name: 'zhishi', component: zhishi },
  { path: '/player', name: 'player', component: player },
  { path: '/project/list', name: 'projectlist', component: projectlist },
  { path: '/project/:id/details', name: 'projectdetails', component: projectdetails },
  { path: '/project/add', name: 'addproject', component: addproject },
  { path: '/login', name: 'login', component: login },
  { path: '/reg', name: 'reg', component: reg },
];

const router = createRouter({
  history: createWebHistory(),
  routes
 
});
router.beforeEach((to, from, next) => {
  
  if ((to.name !=='login' && !store.state.login.userInfo.userId)) {
    next({ name: 'login' });
    
  }else{
    next()
  }
  
});

export default router;
