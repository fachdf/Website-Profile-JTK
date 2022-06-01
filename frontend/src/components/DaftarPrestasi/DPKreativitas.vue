<template>
  <div align="center" class="title">
     <v-sheet
      height="30"
      width="100%"
      color="white"> 
    </v-sheet>
    <p class="display-2 mt-2 btext font-weight-bold" >Pekan Kreativitas Mahasiswa</p>
    <v-sheet
      color="#FF6600"
      height="5"
      width="680">
    </v-sheet>
    <v-row no-gutters class="my-3">
      <v-col
        v-for="(creativities, i) in this.creativities"
          :key="i"
          sm="4"
          class="mx-auto">
            <v-card
              :loading="loading"
              class="mx-auto my-6"
              max-width="450">
                <div class="list-complete-item">
                  <router-link :to="'/'+'gallery'">
                    <v-img
                      max-height="280"
                      :src='creativities.image.url'>
                    </v-img>
                    <div class="overlay">
                      <div class="text">{{ creativities.description }}</div>
                    </div>
                  </router-link>
                </div>
              <v-card-title align="left" style="font-size:19px">
                {{ creativities.title }}
              </v-card-title>
              <v-card-text>
                <v-row
                  align="left"
                  class="mx-0 mt-2">
                  <v-icon>mdi-calendar-blank</v-icon>
                  <div class="grey--text ms-4">
                    {{  moment(creativities.updatedAt).format("DD-MM-YYYY") }}
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
  .list-complete-item a .image {
      display: block;
      width: 100%;
      height: auto;
  }
  .list-complete-item a .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color: black;
  }
  .list-complete-item a:hover .overlay {
      opacity: 65%;
  }
  .list-complete-item a .text {
      color: white;
      font-size: 13px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-30%, -20%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: left;
  }
</style>

<script>
  import axios from "axios";
  import moment from 'moment';
  
  export default {    
    data () {
      return {
        creativities: [],
        moment,
        CMS_API: process.env.VUE_APP_CMS_API,
      }
    },
    beforeMount() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const creativities = await axios.get("http://103.134.154.227:1337/creativity-weeks");
        const len = await axios.get("http://103.134.154.227:1337/creativity-weeks/count");
        // const creativities = await axios.get("http://localhost:1337/creativity-weeks");
        // const len = await axios.get("http://localhost:1337/creativity-weeks/count");

        for (let i = 0; i < len.data; i++) {
          this.creativities.push(creativities.data[i])
        }
      },
    }
  }
</script>