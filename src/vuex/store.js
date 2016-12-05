import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  version: '2.0.1',
  title: 'Kalkulationsprogramm Wartungsverträge und Anschlussgarantie'
}

const mutations = {}

export default new Vuex.Store({
  state,
  mutations
})
