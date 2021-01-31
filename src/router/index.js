import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store';
import Home from '../pages/home.vue';
import about from '../pages/about.vue';
import keji from '../pages/keji.vue';
import web from '../pages/web.vue';
import web3d from '../pages/web3d.vue';
import bim from '../pages/bim.vue';
import player from '../pages/player.vue';
import projectlist from '../pages/project/list.vue';
import addproject from '../pages/project/add.vue';
import login from '../pages/login.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/about', component: about },
  { path: '/web', name:'web', component: web },
  { path: '/web3d', name:'web3d', component: web3d },
  { path: '/bim',  name:'bim',component: bim },
  { path: '/keji', name:'keji', component: keji },
  { path: '/player', name:'player', component: player },
  { path: '/projectlist',  name:'projectlist', component: projectlist },
  { path: '/addproject',  name:'addproject',component: addproject },
  { path: '/login',  name:'login',component: login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to,from,next)=>
{
  if (to.name !== 'login' && !store.state.loggedIn ) next({ name: 'login' });
  else next();
});
export default router;
