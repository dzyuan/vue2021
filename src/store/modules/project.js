const state = () => ({
  projects: [],
  project: {}

});
const getters = {
  projects: state => state.projects,
  project: state => state.project,
};

const mutations = {
  SET_PROJECTS(state, payload) {
    state.projects = payload;
  },
  SET_PROJECT(state, payload) {
    state.project = payload;
  },

};

const actions = {
   setProjects({ commit }, projects) {    
    commit('SET_PROJECTS', projects);
  },

  async setProject({ commit }, project) {
    
    console.log(project);
    commit('SET_PROJECT', project);
  },
};


const projectModule = {
  state,
  getters,
  mutations,
  actions
};
export default projectModule;