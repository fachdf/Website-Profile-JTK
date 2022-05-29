<template>
  <div align="center" class="title">
    <p class="display-2 mt-2 btext font-weight-bold" >Foto</p>
    <v-sheet
      color="#FF6600"
      height="5"
      width="155">
    </v-sheet>
    <v-row no-gutters class="my-3">
      <v-col
        v-for="(carousel, i) in this.carousel"
          :key="i"
          sm="4"
          class="mx-auto">
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="450">
          <v-img
            max-height="300"
            :src='carousel.gambar_gallery[0].url'>
          </v-img>
          <v-card-title align="left">
            {{carousel.keterangan_gallery}}
          </v-card-title>
          <v-card-text>
            <v-row
              align="left"
              class="mx-0 mt-2">
              <v-icon>mdi-calendar-blank</v-icon>
              <div class="grey--text ms-4">
                {{carousel.tanggal_gallery}}
              </div>
            </v-row>
          </v-card-text>
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
        carousel: [],
        CMS_API: process.env.VUE_APP_CMS_API,
      }
    },
    beforeMount() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const carousel = await axios.get("http://103.134.154.227:1337/galleries");
        const len = await axios.get("http://103.134.154.227:1337/galleries/count")

        var i;
        for (let i = 0; i < parseInt(len.data); i++) {
          this.carousel.push(carousel.data[i])
        }
      },
    }
  }
</script>