<template>
    <div align="center" class="title">
      <p class="display-2 mt-2 btext font-weight-bold" >Fasilitas</p>
      <v-sheet
        color="#FF6600"
        height="5"
        width="155"
      ></v-sheet>

      <v-row no-gutters class="my-3" >
        <v-col
          v-for="(carousel, i) in this.fasilitas"
            :key="i"
          cols="5"
          sm="2"
          class="mx-auto"
        >
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              :href="carousel.link"
            >

    <v-img
      height="250"
       :src='carousel.gambar_fasilitas'
       :href='carousel.link'
    ></v-img>

    <v-card-title class="justify-center"><b >{{carousel.nama_fasilitas}}</b></v-card-title>

            </v-card>
          </v-col>
        </v-row>
    
    
    </div>
</template>
<style>
.btext {
   color : #111F4D 
}

.title {
  border-bottom-color: #FF6600;
}
</style>
<script>
import axios from "axios";

  export default {
    data () {
      return {
        fasilitas: [{
          gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572274/kelas_06a85946a9.jpg",
          nama_fasilitas : "Kelas",
          link : "/fasilitas/kelas"
        },{
          gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572229/lab_e3c81fd48c.png",
          nama_fasilitas : "Laboratorium",
          link : "/fasilitas/laboratorium"
        },{
          gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572314/ruang_uks_1_0101bde366.jpg",
          nama_fasilitas : "Kesehatan",
          link : "/fasilitas/kesehatan"
        },{
          gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572125/pujas_b2f29f16d7.jpg",
          nama_fasilitas : "Kantin",
          link : "/fasilitas/kantin"
        }],
        carousel : [],
        test_carousel : []
      }
    },
    created() {
    this.fetchData();
   },
   methods: {
    async fetchData() {
      console.log("Test")
      for (let i = 0; i < 5; i++) {
        console.log(this.fasilitas.gambar_fasilitas[i])
        this.test_carousel.gambar_fasilitas  = this.fasilitas.gambar_fasilitas[i]
        this.test_carousel.nama_fasilitas  = this.fasilitas.nama_fasilitas[i];
        this.carousel.push(this.test_carousel)
      }

      //console.log(this.carousel)
      //"",
      //      "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572314/ruang_uks_1_0101bde366.jpg",
      //      "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572125/pujas_b2f29f16d7.jpg"
      //      "",
      //      "",
      //      ""
      //console.log(this.carousel[0].gambar_artikel[0].url)
      //console.log(this.carousel[1])
    },
    
  },
  }
</script>
