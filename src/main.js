import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'lib-flexible'
import 'reset-css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
