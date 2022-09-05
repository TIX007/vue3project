const state = {
  user: {
    name: "张三",
  },
};
const mutations = {
  setuser: (state, payload) => {
    state.user.name = payload;
  },
};
const actions = {};

export default {
  state,
  mutations,
  actions,
};
