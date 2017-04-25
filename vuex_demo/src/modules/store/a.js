export default {
  state: {
    name: 'moduleA'
  },

  mutations: {
    'a/changeName' (state, payload) {
      state.name += (' changed > ' + (payload && payload.from ? 'from: ' + payload.from : ''));
    }
  },

  actions: {
    'a/change' (context) {
      context.commit('a/changeName');
    },


    'a/changeB' (context) {
      context.commit('b/changeName', {from: 'module-A'});
    }
  }
}
