import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Embed from 'v-video-embed';
import LandingPage from '../views/LandingPage.vue';
import Gallery from '../views/Gallery.vue';
import RiwayatJTK from '../views/RiwayatJTK.vue';
import Fasilitas from '../views/Fasilitas.vue';
import FasilitasKelas from '../views/FasilitasKelas.vue';
import FasilitasKantin from '../views/FasilitasKantin.vue';
import FasilitasKesehatan from '../views/FasilitasKesehatan.vue';
import FasilitasLaboratorium from '../views/FasilitasLaboratorium.vue';
import Kurikulum from '../views/Kurikulum.vue';
import TracerStudy from '../views/TracerStudy.vue';
import TracerStudyD4 from '../views/TracerStudyD4.vue';
import TracerStudyD3 from '../views/TracerStudyD3.vue';
import DaftarPrestasi from '../views/DaftarPrestasi.vue';

Vue.use(VueRouter)
Vue.use(Embed)

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
  },
  {
    path: '/tracerStudy',
    name: 'Tracer Study',
    component: TracerStudy
  },
  {
    path: '/tracerStudy/tracerStudyD4',
    name: 'Tracer Study D4',
    component: TracerStudyD4
  },
  {
    path: '/tracerStudy/tracerStudyD3',
    name: 'Tracer Study D3',
    component: TracerStudyD3
  },
  {
    path: '/daftarPrestasi',
    name: 'Daftar Prestasi',
    component: DaftarPrestasi
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
