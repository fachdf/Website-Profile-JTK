import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Gallery from '../views/Gallery.vue'
import RiwayatJTK from '../views/RiwayatJTK.vue'
import Fasilitas from '../views/Fasilitas.vue'
import FasilitasKelas from '../views/FasilitasKelas.vue'
import FasilitasKantin from '../views/FasilitasKantin.vue'
import FasilitasKesehatan from '../views/FasilitasKesehatan.vue'
import FasilitasLaboratorium from '../views/FasilitasLaboratorium.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
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
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/riwayatJTK',
    name: 'Riwayat JTK',
    component: RiwayatJTK
  },
  {
    path: '/fasilitas',
    name: 'Fasilitas JTK',
    component: Fasilitas
  },
  {
    path: '/fasilitas/kelas',
    name: 'Fasilitas Kelas',
    component: FasilitasKelas
  },
  {
    path: '/fasilitas/kantin',
    name: 'Fasilitas Kantin',
    component: FasilitasKantin
  },
  {
    path: '/fasilitas/kesehatan',
    name: 'Fasilitas Kesehatan',
    component: FasilitasKesehatan
  },
  {
    path: '/fasilitas/laboratorium',
    name: 'Fasilitas Laboratorium',
    component: FasilitasLaboratorium
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
