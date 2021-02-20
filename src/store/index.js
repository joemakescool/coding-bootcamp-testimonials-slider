import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: ['Emilia', 'John', 'Rey'],
    place: 0
  },
  mutations: {

  },
  actions: {
    movePlace (context, newPlace) {
      console.log('movePlace() fired ' + newPlace)
      context.state.place = newPlace
    }
  },
  getters: {
    getPlace (state) {
      return state.place
    },
    getRoutes (state) {
      return state.routes
    }
  },
  modules: {
  }
})
