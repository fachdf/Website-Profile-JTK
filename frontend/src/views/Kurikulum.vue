<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover>
      <v-carousel-item
        v-for="(slide, i) in slides"
          :key="i"
          :src="slide.img">
        <v-row
          class="fill-height"
          align="center"
          justify="center">
          <div class=" black white--text text-h3" align="center" justify="center">
              {{ slide.text }} <br>
              <v-sheet
                color="#FF6600"
                height="5"
                width="455">
              </v-sheet>
          </div>  
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-breadcrumbs
      :items="items"
      divider=">"
      small
      class="ml-9">
    </v-breadcrumbs>
    <KurikulumD3/>
    <KurikulumD4/>
  </div>
</template>

<style>
  .b {
    color : #111F4D 
  }
</style>

<script>
  import axios from "axios";
  import KurikulumD3 from "../components/Kurikulum/KurikulumD3.vue";
  import KurikulumD4 from "../components/Kurikulum/KurikulumD4.vue";

  export default {
    components: {
      KurikulumD3,
      KurikulumD4
    },
    data () {
      return {
        carousel: [],
        CMS_API: process.env.VUE_APP_CMS_API,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          {
          img : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653566467/Group_208_991116458a.png",
          text : "Kurikulum"
          }
        ],
        items: [
          {
          text: 'Home',
          disabled: false,
          href: '/',
          },
          {
            text: 'Kurikulum',
            disabled: true,
            href: '/kurikulum',
          }
        ]        
      }
    },
    beforeMount() {
      this.fetchData();
    },
    methods: {
    },
  }
</script>