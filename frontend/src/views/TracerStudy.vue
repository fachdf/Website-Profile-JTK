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
              width="500">
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
    <TracerStudyList/>
  </div>  
</template>

<style>
  .b {
    color : #111F4D 
  }
</style>

<script>
  import axios from "axios";
  import TracerStudyList from "../components/TracerStudyList.vue";
  
  export default {
    components: {
      TracerStudyList
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
            disabled: true,
            href: '/tracerStudy',
          }
        ],          
      }
    }
  }
</script>