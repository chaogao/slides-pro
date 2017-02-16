import Vue from 'vue';

// js (vue)
var data = {
  value: ''
};

window.data = data;

new Vue({
  data: data,

  methods: {
    showText: () => {
      data.value = 'clicked'
    }
  },

  el: '#text-wrap'
});


data.value = 'hello world';
