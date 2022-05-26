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
import Kurikulum from '../views/Kurikulum.vue'

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
    path: '/profiljurusan',
    name: 'Profil Jurusan',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilJurusan.vue')
  },
  {
    path: '/profilprodiD3',
    name: 'Profil Prodi D3',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilProdiD3.vue')
  },
  {
    path: '/profilprodiD4',
    name: 'Profil Prodi D4',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilProdiD4.vue')
  },
  {
    path: '/kerjasama',
    name: 'Kerja Sama',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kerjasama.vue')
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
  {
    path: '/kurikulum',
    name: 'Kurikulum',
    component: Kurikulum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
