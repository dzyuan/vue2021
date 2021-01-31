const state = () => ({
  projects: {},
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
  async setProjects({ commit }, apiUrl) {
    const { projects } = await this.$axios.$get(apiUrl);
    commit('SET_PROJECTS', projects);
  },
  async setProject({ commit },  params) {
    const  project = await this.$axios.$get( `http://localhost:3000/api/project/${params.id}`);
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