// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// demo1
import App from './state'
import store from './state/store'

// demo2
// import App from './mutation'
// import store from './mutation/store'

// demo3
// import App from './actions'
// import store from './actions/store'

// demo4
// import App from './modules'
// import store from './modules/store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
