<template>
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
   >
        <v-carousel-item
            v-for="(carousel, i) in this.carousel"
            :key="i"
            :src="'http://localhost:1338' + carousel.carousel_img.url"
        >
            
                <v-row
                 class="fill-height"
                 align="center"
                 justify="center"
                 >
                    <div class="text-h4">
                       <p class="black white--text"> {{ carousel.carousel_text }} </p>
                    </div>
                </v-row>
            
        </v-carousel-item>
    </v-carousel>
</template>
<style>
.b {
   color : #111F4D 
}
</style>
<script>
import axios from "axios";
  export default {
    data () {
      return {
        carousel: []
      }
    },
    beforeMount() {
    this.fetchData();
   },
   methods: {
    async fetchData() {
      const carousel = await axios.get("http://localhost:1338/landing-page-carousels");
      //const logoHeader = await axios.get(this.CMS_API + "/logo-header");
      this.carousel = carousel.data;

      console.log(carousel)
    },
  },
  }
</script>
