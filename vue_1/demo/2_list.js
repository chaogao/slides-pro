import Vue from 'vue';

import template from './tmpls/list.html';

var Foo = Vue.extend({
  template: template,

  methods: {
    reverse () {
      this.list.reverse();
    },

    push () {
      this.list.push({
        id: this.list.length,
        name: 'itv'
      })
    }
  },


  data: () => {
    return {
      list: [
        {
          id: 0,
          name: 'mac'
        },
        {
          id: 1,
          name: 'iphone'
        },
        {
          id: 2,
          name: 'iwatch'
        },
        {
          id: 3,
          name: 'ipod'
        }
      ]
    }
  }
});

new Vue({
  components: {
    foo: Foo
  },

  el: '#text-wrap'
});
