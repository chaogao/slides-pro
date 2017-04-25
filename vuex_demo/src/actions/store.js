import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    paying: 0,
    productName: '',
  },

  actions: {
    buy (context, payload) {
      context.commit('changePaying', {
        value: 1
      });

      context.commit('setProductName', {
        name: payload.name + '-no:1234567'
      });

      return new Promise((resolve, reject) => {
        // 模拟 api 提交
        setTimeout(() => {
          context.commit('changePaying', {
            value: 0
          });

          context.commit('setProductName', {
            name: ''
          });

          resolve();
        }, 2000);
      });
    }
  },

  mutations: {

    setProductName (state, payload) {
      state.productName = payload.name;
    },

    changePaying (state, payload) {
      state.paying = payload.value;
    }
  }
});

export default store;
