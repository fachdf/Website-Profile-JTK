<template>
    <div>
        <LPCarousel/>
        <DPPrestasi/>
        <DPKreativitas/>
        <DPPenghargaan/>
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
import DPPrestasi from "../components/DaftarPrestasi/DPPrestasi.vue";
import DPKreativitas from "../components/DaftarPrestasi/DPKreativitas.vue";
import DPPenghargaan from "../components/DaftarPrestasi/DPPenghargaan.vue";

  export default {
    components: {
    LPCarousel,
    DPPrestasi,
    DPKreativitas,
    DPPenghargaan
    }
  }
</script>

<style>

</style>

