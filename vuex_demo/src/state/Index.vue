<template>
  <div>
    <p>{{ msg }}</p>

    <p>{{ componentMsg }}</p>

    <p>{{ len }}</p>
  </div>
</template>


<script>
  import { mapState } from 'vuex'


  export default {
    computed: {
      msg () {
        return this.$store.state.msg;
      },

      len () {
        return this.$store.getters.len;
      }
    },

    data () {
      return {
        componentMsg: 'component msg'
      }
    }
    // computed: mapState({
    //   msg: (state) => {
    //     return state.msg + '!';
    //   }
    // })
  }
</script>
