<template>

    <div>
        <LPCarousel />
        <LPBerita />
        <LPGaleri />
        <LPAgenda/>
    </div>

</template>
<style>
.b {
   color : #111F4D 
}
</style>
<script>
import axios from "axios";

import LPCarousel from "../components/LPCarousel.vue";
import LPBerita from "../components/LPBerita.vue";
import LPGaleri from "../components/LPGaleri.vue";
import LPAgenda from "../components/LPAgenda.vue";
  export default {
    components: {
    LPCarousel,
    LPBerita,
    LPGaleri,
    LPAgenda
   },

    data () {
      return {
        carousel: []
      }

    }
  }
</script>

<style >

</style>

