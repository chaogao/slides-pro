<template>
  <div>
    <p>商品：{{ name }}</p>

    <a href="javascript:void(0);" @click="onClick">购买</a>

    <div class="paying" v-if="paying">
      正在购买付款的商品为：{{ productName }}
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'


  export default {

    data () {
      return {
        name: 'iphone'
      }
    },

    computed: mapState({
      paying: 'paying',
      productName: 'productName'
    }),

    methods: {
      onClick () {
        this.$store.dispatch('buy', {
          name: this.name
        }).then(() => {
          alert('购买成功！');
        })
      }
    }
  }
</script>

<style >
  .paying {
    color: red;
  }

</style>
