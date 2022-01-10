
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import History from '../components/History'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/History')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
