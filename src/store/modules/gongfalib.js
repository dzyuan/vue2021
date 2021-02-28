const state = () => ({
  gongfalibs: [],
  gongfalib: {},
  url:''

});
const getters = {
  gongfalibs: state => state.gongfalibs,
  gongfalib: state => state.gongfalib,
};

const mutations = {
  SET_GONGFALIBS(state, payload) {
    state.gongfalibs = payload;
  },
  SET_GONGFALIB(state, payload) {
    state.gongfalib = payload;
  },
  SET_URL(state, payload) {
    state.url = payload;
  },
};

const actions = {
   setGongfalibs({ commit }, gongfalibs) {    
    commit('SET_GONGFALIBS', gongfalibs);
  },

  async setGongfalib({ commit }, gongfalib) {
    
    console.log(gongfalib);
    commit('SET_GONGFALIB', gongfalib);
  },
  setUrl({commit},url){
    commit('SET_URL', url);
  }
};


const gongfalibModule = {
  state,
  getters,
  mutations,
  actions
};
export default gongfalibModule;