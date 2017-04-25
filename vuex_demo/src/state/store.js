import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    msg: 'hello world'
  },

  getters: {
    len (state) {
      return state.msg.length;
    }
  }
});

export default store;
