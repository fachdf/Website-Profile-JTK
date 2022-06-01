<template>
  <div align=center  class="title">
    <p class="display-2 btext">Sebaran Pekerjaan</p>
    <div>
      <v-img
        max-height="500"
        max-width="600"
        :src='tracer.graphs[1].url'>
      </v-img>
      <v-sheet
        height="20"
        width="100%"
        color="white">
      </v-sheet> 
      <p align=left class="btext">
        {{tracer.job_description}}
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
        const tracer = await axios.get("http://103.226.138.60:1337/tracer-studies/6296d79bb2986f07f4a4cbfb");
        // const tracer = await axios.get("http://localhost:1337/tracer-studies/6296d79bb2986f07f4a4cbfb");
        this.tracer = tracer.data;
      },
    }
  }
</script>