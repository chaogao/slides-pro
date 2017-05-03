import Vue from 'vue';

import mixin from './mixin';

var Foo = Vue.extend({
  template: '<span>foo<a href="javascript:void(0)" v-on:click="show">show</a></span>',
  mixins: [mixin]
});

new Vue({
  data: {},

  components: {
    foo: Foo
  },

  el: '#text-wrap'
});
