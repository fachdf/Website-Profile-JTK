<template>
 <div class="title">
      <v-row
          class="fill-height ml-9 mt-5"
          align="left"
          justify="left" 
        >
          <div class="riwayatjurusan">
            <p width = 50% class="display-2 mt-10 pl-10 btext font-weight-bold" >Riwayat Singkat JTK</p>
            <v-sheet
              elevation="1"
              margin-left="10"
              margin-top="10"
              height="5"
              width="500"
              color="#FF6600"
          > 
          </v-sheet>
            <p align=left class="btext pl-10 mt-10">TK bermula pada tahun 1977 saat Institut Teknologi Bandung mendirikan pendidikan D3 di bidang teknologi informasi yang bernama Pendidikan Ahli Teknik Jurusan Penggunaan Komputer (PAT-JPK). Kemudian, PAT-JPK beralih menjadi Jurusan Teknik Komputer Politeknik ITB. Beberapa peristiwa penting sejak terbentuknya JTK-Politeknik ITB: 
                <br>...
            </p>
          <v-sheet
            height="30"
            width="50%"
            color="white"
          > 
          </v-sheet>
          <v-btn class="white--text mb-6 ml-10" color="#111F4D" to="/riwayatJTK">Selengkapnya</v-btn>
          </div> 
          
          <div align = center class="profilprodi">
            <p class="display-2 mt-10  btext font-weight-bold" >Profil Prodi</p>
            <v-sheet
              color="#FF6600"
              padding-top="5"
              elevation="1"
              width = "300"
              height="5"
            >
            </v-sheet>
            <v-sheet
            height="30"
            width="100%"
            color="white"
            > </v-sheet>
            <v-btn class="white--text mb-6 mr-10 mt-10" color="#111F4D" to="/profilprodiD4">Profil D4</v-btn>
            <v-btn class="white--text mb-6 mt-10" color="#111F4D" to="/profilprodiD3">Profil D3</v-btn>
          </div>
        </v-row>
        
     <v-sheet
        height="50"
        width="100%"
        color="white"
      > </v-sheet>
    </div>
     
</template>

<style scoped>
.tittle{
    width:67%
}
.riwayatjurusan{
    align-content: left;
    width: 50%
}
.profilprodi{
  width:50%
}
</style>