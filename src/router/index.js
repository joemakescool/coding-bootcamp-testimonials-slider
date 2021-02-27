import Vue from 'vue'
import VueRouter from 'vue-router'
import Emilia from '@/views/Emilia'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Emilia',
    component: Emilia
  },
  {
    path: '/John',
    name: 'John',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/John.vue')
  },
  {
    path: '/Rey',
    name: 'Rey',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rey.vue')
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
