import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login'

Vue.use(VueRouter)

const routes = [
  {path: '/login', component: Login},
  {path: '*', redirect: '/login'}
]

export default new VueRouter({
  routes
})
