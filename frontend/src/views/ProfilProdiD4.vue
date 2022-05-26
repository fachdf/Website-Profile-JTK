<template>
<div>
  <LPCarousel />
  <LPProfilProdiD4 />
  <LPVisiMisiD4 />
  <LPTujuanD4 />
  <LPProspekLulusanD4 />
  <LPFasilitasD4 />

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
import LPProfilProdiD4 from "../components/ProfilProdiD4/LPProfilProdiD4.vue"
import LPVisiMisiD4 from "../components/ProfilProdiD4/LPVisiMisiD4.vue"
import LPTujuanD4 from "../components/ProfilProdiD4/LPTujuanD4.vue"
import LPProspekLulusanD4 from "../components/ProfilProdiD4/LPProspekLulusanD4.vue"
import LPFasilitasD4 from "../components/ProfilProdiD4/LPFasilitasD4.vue"

  export default {
    components: {
      LPCarousel,
      LPProfilProdiD4,
      LPVisiMisiD4,
      LPTujuanD4,
      LPProspekLulusanD4,
      LPFasilitasD4
    },
    data () {
      return {
        carousel: []
      }
    },
  }
</script>