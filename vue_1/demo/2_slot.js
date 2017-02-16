import Vue from 'vue';

import template from './tmpls/solt.html';

var App = Vue.extend({
  template: template
});


var Page1 = Vue.extend({
  components: {
    app: App
  },

  template: '<app>{{ msg }}</app>',

  data: () => {
    return {
      msg: '这是 page 1'
    }
  }
});

new Vue({

  components: {
    foo: Page1
  },

  el: '#text-wrap'
});
