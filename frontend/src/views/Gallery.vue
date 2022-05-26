<template>
    <div>
        <LPCarousel/>
        <GFoto/>
        <GVideo/>
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
import GFoto from "../components/GFoto.vue";
import GVideo from "../components/GVideo.vue";

  export default {
    components: {
    LPCarousel,
    GFoto,
    GVideo
   },
  }
</script>

<style>

</style>

