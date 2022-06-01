<template>
  <div align=center  class="title">
    <p class="display-2 btext">Tingkat Kelulusan</p>
    <div>
      <v-img
        max-height="500"
        max-width="600"
<<<<<<< Updated upstream
        src="https://res.cloudinary.com/kelompok-b7/image/upload/v1653569101/sarana_papan_jurusan_560x300_7df440b18e.jpg">
=======
        :src='tracer.graphs[0].url'>
>>>>>>> Stashed changes
      </v-img>
      <v-sheet
        height="20"
        width="100%"
        color="white">
      </v-sheet> 
      <p align=left class="btext">
        {{tracer.graduation_description}}
      </p>
      <v-sheet
        height="20"
        width="100%"
        color="white">
      </v-sheet> 
    </div>  
  </div>
</template>

<style scoped>
  .title{
      width:70%
  }
</style>

<script>
  import axios from "axios";
  var tracer;
  
  export default {    
    data () {
      return {
        tracer,
        CMS_API: process.env.VUE_APP_CMS_API
      }
    },
    beforeMount() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const tracer = await axios.get("http://103.134.154.227:1337/tracer-studies/6296d7b8b2986f07f4a4cbfe");
        // const tracer = await axios.get("http://localhost:1337/tracer-studies/6296d7b8b2986f07f4a4cbfe");
        this.tracer = tracer.data;
      },
    }
  }
</script>