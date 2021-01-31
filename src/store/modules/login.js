import { clearAuthData } from '@/utils';
/* const SET_USERNAME = 'SET_USERNAME';
const SET_TOKEN = 'SET_TOKEN';
const SET_USERID = 'SET_USERID';
const SET_USERTYPE = 'SET_USERTYPE';
const SET_EXPIRESIN = 'SET_EXPIRESIN'; */
const state = () => ({
  username: '',
  userType: '',
  userId: '',
  expiresIn: 0,
  token: '',
  loggedIn: false
});
const getters = {
  username: state => state.username,
  userType: state => state.userType,
  loggedIn: state => state.loggedIn
};

const mutations = {
  SET_USERNAME(state, payload) {
    state.username = payload;
  },
  SET_LOGGEDIN(state, payload) {
    state.loggedIn = payload;
  },
  SET_USERTYPE(state, payload) {
    state.userType = payload;
  },
  SET_USERID(state, payload) {
    state.userId = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_EXPIRESIN(state, payload) {
    state.expiresIn = payload;
  }
};

const actions = {

  setLoggedIn({ commit }, payload) {
    commit("SET_LOGGEDIN", payload);
  },
  setUsername({ commit }, payload) {
    commit("SET_USERNAME", payload);
  },
  setUserId({ commit }, payload) {
    commit("SET_USERID", payload);
  },
  setUserType({ commit }, payload) {
    commit("SET_USERTYPE", payload);
  },
  setToken({ commit }, payload) {
    commit("SET_TOKEN", payload);
  },
  setExpiresIn({ commit }, payload) {
    commit("SET_EXPIRESIN", payload);
  },
  setLogoutTimer({ dispatch }, interval) {
    setTimeout(() => dispatch("logoutUser"), interval);
  },



  async logoutUser({ commit }) {
    clearAuthData();

    commit('SET_TOKEN', '');
    commit('SET_USERNAME', '');
    commit('SET_USERID', '');
    commit('SET_USERTYPE', '');
    commit('SET_LOGGEDIN', false);
    await this.$router.push('/login');


  }
};


const loginModule = {
  state,
  getters,
  mutations,
  actions
};
export default loginModule;
