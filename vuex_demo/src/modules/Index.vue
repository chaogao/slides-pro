<template>
  <div class="root-el">
    {{ name }}
    <div class="child-wrap">
      <module-a></module-a>
      <module-b></module-b>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'
  import ModuleA from './coms/a'
  import ModuleB from './coms/b'

  export default {
    computed: mapState({
      name: (state) => state.name
    }),

    components: {
      'module-b': ModuleB,
      'module-a': ModuleA
    }
  }
</script>


<style>
  .root-el {
    border: 1px solid #efefef;
    padding: 20px;
  }

  .child-wrap {
    border: 1px solid #efefef;
    padding: 10px;
  }

</style>
