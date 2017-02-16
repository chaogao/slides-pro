import Vue from 'vue';

import template from './tmpls/mustache.html';

var Foo = Vue.extend({
  template: '<div>{{ msg }}</div>',

  created: function () {
    console.info('$el is:', this.$el)

    console.log('created');
  },

  mounted: function () {
    console.log('$el is:', this.$el);

    console.log('mounted');
  },

  data: () => {
    return {
      msg: 'hello vue'
    }
  }
});

new Vue({

  components: {
    foo: Foo
  },

  el: '#text-wrap'
});
