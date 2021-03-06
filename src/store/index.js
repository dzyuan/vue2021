import { createStore } from 'vuex';
import loginModule from './modules/login';
import projectModule from './modules/project';
import gongfalibModule from './modules/gongfalib';
import postModule from './modules/post';
export default createStore ({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login: loginModule,
    project:projectModule,
    gongfalib:gongfalibModule,
    post:postModule
    }

});


