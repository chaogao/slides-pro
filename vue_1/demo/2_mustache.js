import Vue from 'vue';

import template from './tmpls/mustache.html';

var Foo = Vue.extend({
  template: template,

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },

  data: () => {
    return {
      msg: 'hello vue',
      show: 1
    }
  }
});

new Vue({

  components: {
    foo: Foo
  },

  el: '#text-wrap'
});
