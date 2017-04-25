<template>
  <div>
    <p>{{ msg }}</p>

    <a @click="onClick" href="javascript:void(0);">change</a>

    <a @click="onClickToggle" href="javascript:void(0);">toggle</a>

    <div v-if="show">设置了显示</div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'


  export default {
    computed: mapState({
      msg: 'msg',
      show: 'show'
    }),

    methods: {
      onClick () {
        this.$store.commit('change');
      },

      onClickToggle () {
        this.$store.commit('display', {
          value: !this.show
        })
      }
    }
  }
</script>
