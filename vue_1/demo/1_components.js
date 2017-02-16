import Vue from 'vue';

var Foo = Vue.extend({
  template: '<span>foo</span>'
});

new Vue({
  data: {},

  components: {
    foo: Foo
  },

  el: '#text-wrap'
});
