<template>
<div>
  <LPCarousel />
  <LPVisiMisiD3 />
  <LPProspekLulusan />
  <LPPosisiKerja />

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
import LPVisiMisiD3 from "../components/ProfilProdiD3/LPVisiMisiD3.vue"
import LPProspekLulusan from "../components/ProfilProdiD3/LPProspekLulusanD3.vue"
import LPPosisiKerja from "../components/ProfilProdiD3/LPPosisiKerja.vue"
  export default {
    components: {
      LPCarousel,
      LPVisiMisiD3,
      LPProspekLulusan,
      LPPosisiKerja,
    },
    data () {
      return {
        carousel: []
      }
    },
  }
</script>