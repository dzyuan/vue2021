import { clearAuthData} from '@/utils';
import router from '../../router';
const state = () => ({
  userInfo:{},
  
});
const getters = {
  
};

const mutations = {
  SET_USERINFO(state, payload) {
   
    state.userInfo = payload;
  },
 
};

const actions = {

  setUserInfo({ commit }, payload) {
    commit("SET_USERINFO", payload);
  },
  getUserInfo({ commit }, payload) {

    commit("SET_USERINFO", payload);
  },
 
  setLogoutTimer({ dispatch }, interval) {
    setTimeout(() => dispatch("clearUserInfo"), interval);
  },



  async clearUserInfo({ commit }) {
    clearAuthData();
    commit('SET_USERINFO', '');
  
    await router.push('/login');


  }
};


const loginModule = {
  state,
  getters,
  mutations,
  actions
};
export default loginModule;
