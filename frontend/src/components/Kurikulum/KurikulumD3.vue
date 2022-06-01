<template>
  <div align=center class="title">
    <p class="display-2 btext font-weight-bold" >D3 Teknik Informatika</p>
    <v-sheet
      margin-top="10"
      height="5"
      width="600"
      color="#FF6600"> 
    </v-sheet>
    <v-sheet
      height="30"
      width="100%"
      color="white"> 
    </v-sheet>
    <v-img
      max-height="800"
      max-width="600"
      :src='kurikulum.image.url'>
    </v-img>
    <!-- <p align=left class="btext mt-5" style="width:70%">
      {{ kurikulum.description }}
    </p> -->
    <v-sheet
      height="30"
      width="100%"
      color="white"> 
    </v-sheet>
  </div>
</template>

<style scoped>
  .title{
      width:100%;
  }
</style>

<script>
  import axios from "axios";
  var kurikulum;
  
  export default {    
    data () {
      return {
        kurikulum,
        CMS_API: process.env.VUE_APP_CMS_API
      }
    },
    beforeMount() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const tracer = await axios.get("http://103.226.138.60:1337/curriculums/6296db254f2eb424b8cb9d6c");
        // const kurikulum = await axios.get("http://localhost:1337/curriculums/6296db254f2eb424b8cb9d6c");
        this.kurikulum = kurikulum.data;
      },
    }
  }
</script>