<template>
  <div align="center" class="title">
    <v-sheet
      height="50"
      width="100%"
      color="white">
    </v-sheet> 
    <p class="display-2 mt-2 btext font-weight-bold" >Video</p>
    <v-sheet
      color="#FF6600"
      height="5"
      width="155">
    </v-sheet>
    <v-row no-gutters class="my-3">
      <v-col
        v-for="(videos, i) in this.videos"
          :key="i"
          sm="4"
          class="mx-auto">
        <v-card
          :loading="loading"
          class="mx-auto my-6"
          max-width="450">
          <v-sheet
            height="30"
            width="100%"
            color="white">
          </v-sheet> 
          <video-embed css="embed-responsive-16by9"
            :src='videos.link'>
          </video-embed>
          <v-card-title align="left" style="font-size:19px">
            {{videos.title}}
          </v-card-title>
          <v-card-text>
            <v-row
              align="left"
              class="mx-0 mt-2">
              <v-icon>mdi-calendar-blank</v-icon>
              <div class="grey--text ms-4">
                {{ moment(videos.updatedAt).format("DD-MM-YYYY") }}
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style>
  .btext {
    color : #111F4D 
  }
  .title {
    border-bottom-color: #FF6600;
  }
</style>

<script>
  import axios from "axios";
  import moment from "moment";
  
  export default {    
    data () {
      return {
        videos: [],
        moment: moment,
        CMS_API: process.env.VUE_APP_CMS_API,
      }
    },
    beforeMount() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const videos = await axios.get("http://103.226.138.60:1337/videos");
        const len = await axios.get("http://103.226.138.60:1337/videos/count");
        // const videos = await axios.get("http://localhost:1337/videos");
        // const len = await axios.get("http://localhost:1337/videos/count");

        for (let i = 0; i < len.data; i++) {
          this.videos.push(videos.data[i])
        }
      },
    }
  }
</script>