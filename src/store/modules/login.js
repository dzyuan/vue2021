import { clearAuthData} from '../../utils';

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



 clearUserInfo({ commit }) {
    clearAuthData();
    commit('SET_USERINFO', {});
  }
};


const loginModule = {
  state,
  getters,
  mutations,
  actions
};
export default loginModule;
