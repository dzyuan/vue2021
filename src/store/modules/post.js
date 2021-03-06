const state = () => ({
  posts: [],
  post: {},
  url:''

});
const getters = {
  posts: state => state.posts,
  post: state => state.post,
};

const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload;
  },
  SET_POST(state, payload) {
    state.post = payload;
  },
  SET_URL(state, payload) {
    state.url = payload;
  },
};

const actions = {
   setPosts({ commit }, posts) {    
    commit('SET_POSTS', posts);
  },

  async setPost({ commit }, post) {
    
    console.log(post);
    commit('SET_POST', post);
  },
  setUrl({commit},url){
    commit('SET_URL', url);
  }
};


const postModule = {
  state,
  getters,
  mutations,
  actions,
};
export default postModule;