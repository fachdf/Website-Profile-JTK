<template>
  <div>
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.img"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        
        <div class=" black white--text text-h3" align="center"
          justify="center">
            {{ slide.text }} <br>
            <v-sheet
        color="#FF6600"
        height="5"
        width="455"
      ></v-sheet>
        </div>
        
        </v-row>
        
    </v-carousel-item>
  </v-carousel>
  <v-breadcrumbs
      :items="items"
      divider=">"
      small
      class="ml-9"
  ></v-breadcrumbs>
  <LPProfilJTK />
  <LPRiwayat />
  <LPProfilProdi />
  <LPVisiMisi />

</div>
</template>
<style>
.b {
   color : #111F4D 
}

</style>
<script>
import axios from "axios";
import LPCarousel from "../components/LPCarousel.vue"
import LPProfilJTK from "../components/LPProfilJTK.vue"
import LPRiwayat from "../components/LPRiwayat.vue"
import LPProfilProdi from "../components/LPProfilProdi.vue"
import LPVisiMisi from "../components/LPVisiMisi.vue"
  export default {
    components: {
      LPProfilJTK,
      LPRiwayat,
      LPProfilProdi,
      LPVisiMisi,
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
        slides: [{
          img : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653566467/Group_208_991116458a.png",
          text : "Profil Jurusan"
        }
        ],
        items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Profil Jurusan',
          disabled: true,
          href: '/profiljurusan',
        }
      ],
        
      }

    },
    beforeMount() {
    this.fetchData();
   },
   methods: {
    async fetchData() {
      const riwayat = await axios.get(this.CMS_API + "/riwayat-jtk");
      //const logoHeader = await axios.get(this.CMS_API + "/logo-header");
      var i;
      this.riwayatJTK_text = riwayat.data.riwayatJTK
      console.log(riwayat.data)
      //console.log(this.carousel[0].gambar_artikel[0].url)
      //console.log(this.carousel[1])
    },
    
  },
  }
</script>