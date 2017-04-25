<template>
  <div class="module-inner">
    {{ name }}

    <a href="javascript:void(0)" @click="onClick">changeSelf</a>
    <a href="javascript:void(0)" @click="onClickRoot">changeRoot</a>
    <a href="javascript:void(0)" @click="onClickChangeB">change-moduleB</a>
  </div>
</template>


<script>
  import {mapState} from 'vuex';

  export default {
    computed: mapState({
      'name': state => state.a.name
    }),

    methods: {
      onClick () {
        this.$store.dispatch('a/change');
      },

      onClickRoot () {
        this.$store.commit('changeName', {
          from: 'module-A'
        })
      },

      onClickChangeB () {
        this.$store.dispatch('a/changeB');
      }
    }
  }

</script>
