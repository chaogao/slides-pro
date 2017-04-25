import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    msg: 'hello world',
    show: 0
  },

  mutations: {
    change (state) {
      state.msg += ' changed!'
    },

    display (state, payload) {
      state.show = payload.value;
    }
  }
});

export default store;
