<template>
  <div align="center" class="title">
    <v-row no-gutters class="my-3">
      <v-col
        v-for="(carousel, i) in this.fasilitas"
          :key="i"
          sm="3"
          class="mx-auto">
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="700"
            :href="carousel.link">
            <v-img
              width="500"
              :src='carousel.gambar_fasilitas'
              :href='carousel.link'>
            </v-img>
            <v-card-title class="justify-center">
              <b>{{carousel.nama_fasilitas}}</b>
            </v-card-title>
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
  // import axios from "axios";

  export default {
    data () {
      return {
        fasilitas: [
          {
            gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1654059082/d3_cover_42f99ce499.jpg",
            nama_fasilitas : "D3 Teknik Informatika",
            link : "/tracerStudy/tracerStudyD3"
          },
          {
            gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1654059082/d4_cover_74ed63b59a.jpg",
            nama_fasilitas : "D4 Teknik Informatika",
            link : "/tracerStudy/tracerStudyD4"
          }
        ],
        carousel : [],
        test_carousel : []
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        for (let i = 0; i < 2; i++) {
          console.log(this.fasilitas.gambar_fasilitas[i])
          this.test_carousel.gambar_fasilitas  = this.fasilitas.gambar_fasilitas[i]
          this.test_carousel.nama_fasilitas  = this.fasilitas.nama_fasilitas[i];
          this.carousel.push(this.test_carousel)
        }
      },
    },
  }
</script>