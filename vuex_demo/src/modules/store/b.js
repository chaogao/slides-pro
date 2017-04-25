export default {
  state: {
    name: 'moduleB'
  },

  mutations: {
    'b/changeName' (state, payload) {
      state.name += (' changed > ' + (payload && payload.from ? 'from: ' + payload.from : ''));
    }
  },

  actions: {
    'b/change' (context) {
      context.commit('b/changeName');
    },

    'b/changeA' (context) {
      context.commit('a/changeName', {from: 'module-B'});
    }
  }
}
