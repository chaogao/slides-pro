import Vue from 'vue';

var Bar = Vue.extend({
  props: {
    msg: String
  },

  template: '<div><div>{{ msg }}</div><a href="javascript:void(0)"  v-on:click="emit">触发</a></div>',

  methods: {
    emit: function () {
      this.$emit('pop');
    }
  }
});


var Foo = Vue.extend({
  template: '<div><bar v-on:pop="onPop" v-bind:msg="msg">foo</bar> <div v-if="show">点击了子组件</div></div>',

  components: {
    bar: Bar
  },

  methods: {
    onPop: function () {
      this.show = 1;
    }
  },

  data: () => {
    return {
      msg: 'hello vue',
      show: 0
    }
  }
});

new Vue({
  data: {},

  components: {
    foo: Foo
  },

  el: '#text-wrap'
});
