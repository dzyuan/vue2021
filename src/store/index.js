import { createStore } from 'vuex';
import loginModule from './modules/login';
import projectModule from './modules/project';

export default createStore ({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login: loginModule,
    project:projectModule
    }

});


