import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: ['/', 'John', 'Rey'],
    place: 0,
    direction: -1
  },
  mutations: {

  },
  actions: {
    movePlace (context, { newPlace, direction }) {
      context.state.place = newPlace
      context.state.direction = direction
    }
  },
  getters: {
    getPlace (state) {
      return state.place
    },
    getRoutes (state) {
      return state.routes
    },
    getDirection (state) {
      return state.direction
    }
  },
  modules: {
  }
})
