<template>
  <div align="center">
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
    <p align=center class="display-2 btext font-weight-bold" >Prodi D3 Teknik Informatika</p>
    <v-sheet
       color="#FF6600"
       padding-top="10"
       margin-bottom="40"
       padding-bottom="50"
       height="5"
       width="700"> 
    </v-sheet>
    <v-sheet
      height="40"
      width="100%"
      color="white"> 
    </v-sheet>
    <TCD3Kelulusan/>
    <TCD3Sebaran/>
  </div>
</template>

<style>
  .b {
    color : #111F4D 
  }
</style>

<script>
  //import axios from "axios";
  import TCD3Kelulusan from "../components/TracerStudyD3/TCD3Kelulusan.vue";
  import TCD3Sebaran from "../components/TracerStudyD3/TCD3Sebaran.vue";

  export default {
    components: {
      TCD3Kelulusan,
      TCD3Sebaran
    },
    data () {
      return {
        carousel: [],
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
            text : "Hasil Tracer Study"
          }
        ],
        items: [
          {
            text: 'Home',
            disabled: false,
            href: '/',
          },
          {
            text: 'Tracer Study',
            disabled: false,
            href: '/tracerStudy',
          },
          {
            text: 'Tracer Study D3',
            disabled: true,
            href: '/tracerStudyD3',
          }
        ],          
      }
    }  
  }
</script>