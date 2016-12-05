import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'

// get the css for vue-material
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'teal',
  accent: 'white'
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  store,
  router
}).$mount('#app')
