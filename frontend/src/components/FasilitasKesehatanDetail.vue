<template>
    <div  class="title ml-16">
      <p class="display-2 mt-2 ml-5 btext font-weight-bold left" >Kesehatan</p>
      <v-sheet
        color="#FF6600"
        height="5"
        width="155"
      ></v-sheet>
    <v-row no-gutters>
      <v-col
  
        cols="2"
        sm="7"
      >
        <v-carousel style="width:100%" class="mt-3">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        
      </v-col>
      <v-col
        class="ml-5"
        cols="12"
        sm="1"
      >
      
        <v-divider
  vertical
></v-divider>
        
      </v-col>

      <v-col
        
        cols="12"
        sm="3"
      >
      
        <b class="display-2 justify-center">Fasilitas Lain</b>
        
        <v-divider
          class="ml-n16"
        ></v-divider>
        <br>
        <b class="display-1 justify-center ml-8"><a href="/fasilitas/laboratorium">Laboratorium</a></b>
        <br>
        <br>
        <b class="display-1 justify-center ml-16"><a href="/fasilitas/kesehatan">Kelas</a></b>
        <br>
        <br>
        <b class="display-1 justify-center ml-16"><a href="/fasilitas/kantin">Kantin</a></b>

      </v-col>
    </v-row>
    
    <p class=" justify-center ml-5">Kesehatan merupakan fasilitas utama dalam JTK. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
    
    
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

  export default {
    data () {
      return {
        fasilitas: [{
          gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572274/kelas_06a85946a9.jpg",
          nama_fasilitas : "Kelas",
          link : "/fasilitas/kelas"
        },{
          gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572229/lab_e3c81fd48c.png",
          nama_fasilitas : "Laboratorium",
          link : "/fasilitas/laboratorium"
        },{
          gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572314/ruang_uks_1_0101bde366.jpg",
          nama_fasilitas : "Kesehatan",
          link : "/fasilitas/kesehatan"
        },{
          gambar_fasilitas : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572125/pujas_b2f29f16d7.jpg",
          nama_fasilitas : "Kantin",
          link : "/fasilitas/kantin"
        }],
        carousel : [],
        test_carousel : [],
        items: [
          {
            src: 'https://res.cloudinary.com/kelompok-b7/image/upload/v1653572314/ruang_uks_1_0101bde366.jpg',
          }
        ],
      }
    },
    created() {
    this.fetchData();
   },
   methods: {
    async fetchData() {
      console.log("Test")
      for (let i = 0; i < 5; i++) {
        console.log(this.fasilitas.gambar_fasilitas[i])
        this.test_carousel.gambar_fasilitas  = this.fasilitas.gambar_fasilitas[i]
        this.test_carousel.nama_fasilitas  = this.fasilitas.nama_fasilitas[i];
        this.carousel.push(this.test_carousel)
      }

      //console.log(this.carousel)
      //"",
      //      "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572314/ruang_uks_1_0101bde366.jpg",
      //      "https://res.cloudinary.com/kelompok-b7/image/upload/v1653572125/pujas_b2f29f16d7.jpg"
      //      "",
      //      "",
      //      ""
      //console.log(this.carousel[0].gambar_artikel[0].url)
      //console.log(this.carousel[1])
    },
    
  },
  }
</script>
