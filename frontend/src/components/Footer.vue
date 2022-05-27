<template>
<nav>
    <v-toolbar color="#FFFFFF" height="180px">
     <v-toolbar-title class="text-uppercase grey--text" >
      <v-btn height="60" @click="toHome()" color="transparent">
          <v-img
          :src="require('../assets/logo.png')"
          />
      </v-btn>
     </v-toolbar-title>
  <footer class="absolute w-full bottom-0 bg-gray-900 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-8/12 px-4">
          <ul class="footer">
            <li>
              <h3 class="font-weight-bold btext"><b>Tentang JTK</b></h3>
            </li>
            <li>
              <h3 class="font-weight-bold btext" style="margin-left: 70px"><b>Pendidikan</b></h3>
            </li>
            <li>
              <h3 class="font-weight-bold btext"><a href="/daftarPrestasi" style="margin-left: 70px; color: #111F4D; text-decoration: none"><b>Penghargaan</b></a></h3>
            </li>
            <li>
              <h3 class="font-weight-bold btext"><a href="/kerjasama" style="margin-left: 70px; color: #111F4D; text-decoration: none"><b>Kerjasama</b></a></h3>
            </li>
            <li>
              <h3 class="font-weight-bold btext"><a href="/#" style="margin-left: 70px; color: #111F4D; text-decoration: none"><b>Kontak</b></a></h3>
            </li>
          </ul>
        </div>
        
        <ul class="footer">
            <li style="margin-left: -22px">
              <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
              <h4 class="font-weight-bold btext"><a href="/riwayatJTK" style="color: #111F4D; text-decoration: none">Sejarah</a></h4>
              </ul>
            </div>
            
            <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
              <h4 class="font-weight-bold btext"><a href="/profiljurusan" style="color: #111F4D; text-decoration: none">Profil Jurusan</a></h4>
              </ul>
            </div>
            
            <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
              <h4 class="font-weight-bold btext"><a href="/fasilitas" style="color: #111F4D; text-decoration: none">Fasilitas</a></h4>
              </ul>
            </div>

            <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
              <h4 class="font-weight-bold btext"><a href="/tracerStudy" style="color: #111F4D; text-decoration: none">Tracer Studi</a></h4>
              </ul>
            </div>
          </li>
          <li style="margin-left: 20px">
              <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
              <h4 class="font-weight-bold btext"><a href="/agenda" style="color: #111F4D; text-decoration: none">Agenda</a></h4>
              </ul>
            </div>
            
            <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
              <h4 class="font-weight-bold btext"><a href="/kurikulum" style="color: #111F4D; text-decoration: none">Kurikulum</a></h4>
              </ul>
            </div>
            
            <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
              <h4 class="font-weight-bold btext"><a href="/dosen" style="color: #111F4D; text-decoration: none">Dosen</a></h4>
              </ul>
            </div>

            <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
              <h4 class="font-weight-bold btext"><a href="/pegawai" style="color: #111F4D; text-decoration: none">Pegawai</a></h4>
              </ul>
            </div>
          </li>
        </ul>
        
      </div>
      
    </div>
    </footer>
  </v-toolbar>
</nav>
</template>

<style>
.footer li {
  display: inline;
  float: left;
}
</style>