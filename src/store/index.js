import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countrydetails: [],
    currentCountry: [],
    lat: [],
    lng: [],
    drawer: false
  },
  mutations: {
    setdrawer(state, drawer) {
      state.drawer = !drawer
    }
  },
  actions: {
  },
  modules: {
  }
})
