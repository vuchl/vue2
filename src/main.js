import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import Element from 'element-ui'

Vue.use(Element)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  store,
  router
}).$mount('#app')
