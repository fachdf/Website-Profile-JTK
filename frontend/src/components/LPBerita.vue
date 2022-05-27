<template>
    <div align="center" class="title">
      <p class="display-2 mt-2 btext font-weight-bold" >Berita</p>
      <v-sheet
        color="#FF6600"
        height="5"
        width="155"
      ></v-sheet>

      <v-row no-gutters class="my-3" >
        <v-col
          v-for="(carousel, i) in this.carousel"
            :key="i"
          cols="5"
          sm="2"
          class="mx-auto"
        >
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
            >

    <v-img
      height="250"
       :src='carousel.gambar_artikel[0].url'
    ></v-img>

    <v-card-title>{{carousel.judul_artikel}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0 mt-2"
      >
        <v-icon>mdi-calendar-blank</v-icon>
        <div class="grey--text ms-4">
          {{carousel.tanggal_posting_artikel}}
        </div>
      </v-row>
    </v-card-text>
            </v-card>
          </v-col>
        </v-row>
    

    <v-btn class="white--text mb-6" color="#111F4D">Selengkapnya</v-btn>
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
        carousel: [],
         CMS_API: process.env.VUE_APP_CMS_API,
      }
    },
    beforeMount() {
    this.fetchData();
   },
   methods: {
    async fetchData() {
      const carousel = await axios.get("http://103.134.154.227:1337/artikels");
      //const logoHeader = await axios.get(this.CMS_API + "/logo-header");
      var i;
      for (let i = 0; i < 5; i++) {
        this.carousel.push(carousel.data[i])
      
      }
      //console.log("ini gambar")
      //console.log(this.carousel[0].gambar_artikel[0].url)
      //console.log(this.carousel[1])
    },
    
  },
  }
</script>
