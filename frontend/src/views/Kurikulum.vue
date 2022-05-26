<template>
    <div>
        <LPCarousel/>
        <KurikulumD4/>
        <KurikulumD3/>
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
import KurikulumD4 from "../components/KurikulumD4.vue";
import KurikulumD3 from "../components/KurikulumD3.vue";

  export default {
    components: {
    LPCarousel,
    KurikulumD4,
    KurikulumD3
   },

  }
</script>

<style>

</style>

