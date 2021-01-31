import { createStore } from 'vuex';
import loginModule from '@/store/modules/login';
import projectModule from '@/store/modules/project';

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


