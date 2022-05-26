<template>
<div>
  <LPCarousel />
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
      LPCarousel,
      LPProfilJTK,
      LPRiwayat,
      LPProfilProdi,
      LPVisiMisi,
    },
    data () {
      return {
        carousel: []
      }
    },
  }
</script>