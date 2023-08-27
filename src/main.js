import Vue from 'vue'
import App from './App'
import store from './store'
import { Plugin } from 'vue-fragment'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
Vue.use(Plugin)
