import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profiljurusan',
    name: 'Profil Jurusan',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilJurusan.vue')
  },
  {
    path: '/profilprodiD3',
    name: 'Profil Prodi D3',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilProdiD3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
