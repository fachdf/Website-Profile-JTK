<template>
<div>
  <LPCarousel />
  <LPKerjasama />

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
import LPKerjasama from "../components/Kerjasama/LPKerjasama.vue"
  export default {
    components: {
      LPCarousel,
      LPKerjasama
    },
    data () {
      return {
        carousel: []
      }
    },
  }
</script>