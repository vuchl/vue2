import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  version: '0.0.1'
}

const mutations = {}

export default new Vuex.Store({
  state,
  mutations
})
