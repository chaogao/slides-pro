import Vuex from 'vuex';
import Vue from 'vue';

import a from './a';
import b from './b';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    a,
    b
  },

  state: {
    name: 'rootModule',
  },

  mutations: {
    changeName (state, payload) {
      state.name += (' changed > '  + (payload && payload.from ? 'from: ' + payload.from : ''));
    }
  }
});

export default store;
