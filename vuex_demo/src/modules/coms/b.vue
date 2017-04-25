<template>
  <div class="module-inner">
    {{ name }}

    <a href="javascript:void(0)" @click="onClick">changeSelf</a>
    <a href="javascript:void(0)" @click="onClickRoot">changeRoot</a>
    <a href="javascript:void(0)" @click="onClickChangeA">change-moduleA</a>
  </div>
</template>


<script>
  import {mapState} from 'vuex';

  export default {
    computed: mapState({
      'name': state => state.b.name
    }),

    methods: {
      onClick () {
        this.$store.dispatch('b/change');
      },

      onClickRoot () {
        this.$store.commit('changeName', {
          from: 'module-B'
        })
      },

      onClickChangeA () {
        this.$store.dispatch('b/changeA');
      }
    }
  }

</script>
