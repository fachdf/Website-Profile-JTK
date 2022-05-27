<template>

    <div>
        <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.img"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        
        <div class=" black white--text text-h3" align="center"
          justify="center">
            {{ slide.text }} <br>
            <v-sheet
        color="#FF6600"
        height="5"
        width="455"
      ></v-sheet>
        </div>
        
        </v-row>
        
    </v-carousel-item>
  </v-carousel>
  <v-breadcrumbs
      :items="items"
      divider=">"
      small
      class="ml-9"
    ></v-breadcrumbs>
        
    <v-row
          class="fill-height ml-9 mt-5"
          align="left"
          justify="left"
          
        >
        
        <div class=" black--text text-h3" align="left"
          justify="center">
            <v-img
                class="ml-15"
                margin-left="10"
                max-height="250"
                max-width="500"
                src="https://res.cloudinary.com/kelompok-b7/image/upload/v1653569101/sarana_papan_jurusan_560x300_7df440b18e.jpg"
            ></v-img>
            
        </div>
        <p class="ml-5 mt-15"><b>JTK bermula pada tahun 1977 saat Institut Teknologi Bandung mendirikan pendidikan D3 <br>di bidang teknologi informasi yang bernama Pendidikan Ahli Teknik Jurusan Penggunaan Komputer (PAT-JPK).<br> Kemudian, PAT-JPK beralih menjadi Jurusan Teknik Komputer Politeknik ITB</b></p>
        
        </v-row>

        
  <div  align="left" align-left class="ml-16">
      <v-timeline
        align-top
        dense
        class="ml-16"
      >
        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>1989</strong>
            </v-col>
            <v-col>
              <strong>Berdasarkan SK Rektor ITB No. 203/SK/PT07.H/1/1989, semua pendidikan diploma di lingkungan ITB harus berada di bawah institusi Politeknik ITB. Kemudian PAT-JPK ITB dialihkan ke Politeknik ITB dan namanya menjadi Jurusan Teknik Komputer Politeknik ITB (JTK-Politeknik ITB).</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>1994</strong>
            </v-col>
            <v-col>
              <strong>JTK mendirikan PATI (Pendidikan Aplikasi Teknologi Informatika). PATI kemudian menjadi kelas ekstensi sore hari dan saat ini seluruhnya telah melebur ke dalam kelas reguler JTK.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>1995</strong>
            </v-col>
            <v-col>
              <strong>berdasarkan SK Rektor ITB, dosen-dosen JTK diberi tugas untuk memberikan bantuan pengajaran kepada Jurusan Teknik Sistem Informatika STT Telkom Bandung.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>1996</strong>
            </v-col>
            <v-col>
              <strong>JTK membangun stasion radio paket untuk akses jaringan komputer/internet untuk pemakaian internal di jurusan. Tahun 2001, JTK membangun backbone jaringan serat optik untuk memperlancar komunikasi se-kampus POLBAN, dan terakhir JTK juga membangun stasiun internet waveLAN.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>1997</strong>
            </v-col>
            <v-col>
              <strong>Berdasarkan SK Mendikbud, Politeknik ITB berubah nama menjadi Politeknik Negeri Bandung (POLBAN). Inisial JTK-Politeknik ITB kemudian menjadi JTK POLBAN, dan sejak saat itu statusnya tidak lagi di bawah ITB, tapi telah mandiri sebagai suatu Perguruan Tinggi Negeri yang langsung di bawah Kementerian Pendidikan dan Kebudayaan.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>1998</strong>
            </v-col>
            <v-col>
              <strong>Berdasarkan SK Mendikbud, nama jurusan berubah menjadi Jurusan Teknik Komputer dan Informatika (JTKI). Namun karena telah demikian familiar, inisial jurusan tetap JTK POLBAN dan bukan JTKI-POLBAN.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2000</strong>
            </v-col>
            <v-col>
              <strong>JTK mulai mengembangkan Sistem Pendidikan dan Kurikulum Berbasis Kompetensi, antara lain dibutuhkan untuk mengantisipasi kebutuhan lapangan kerja yang profesional dan perkembangan teknologi informasi yang demikian pesat.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2001</strong>
            </v-col>
            <v-col>
              <strong>Pengajuan proposal JTK disetujui oleh Kementerian Pendidikan dan Kebudayaan sehingga mendapat kepercayaan memperoleh dana hibah untuk Proyek Pengembangan Manajemen Pendidikan Tinggi (Development Undergraduate for Education – DUE-Like) sebesar 1,4 milyar untuk periode tahun 2001—2005.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2001</strong>
            </v-col>
            <v-col>
              <strong>Beberapa dosen JTK diberi tugas untuk menjadi asesor Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT).</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2002-2005</strong>
            </v-col>
            <v-col>
              <strong>berdasarkan SK Direktur POLBAN, JTK diberi tugas untuk memberikan bimbingan/bantuan dalam pembentukan dan pengelolaan Jurusan Manajemen Informatika Politeknik Pos Bandung.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2005</strong>
            </v-col>
            <v-col>
              <strong>Pengajuan proposal JTK disetujui oleh Dikti sehingga mendapat kepercayaan memperoleh dana hibah kompetisi A3 sebesar 2,4 milyar untuk periode tahun 2006—2008.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2007</strong>
            </v-col>
            <v-col>
              <strong>Program studi D3 Teknik Informatika mendapatkan nilai akreditasi A dari BAN-PT.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2008</strong>
            </v-col>
            <v-col>
              <strong>Sebagai salah satu indikator dan kegiatan dalam hibah kompetisi A3, JTK tersertifikasi ISO dalam rangka pengendalian mutu.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2009</strong>
            </v-col>
            <v-col>
              <strong>Program studi D4 Teknik Informatika dibuka.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2011-2012</strong>
            </v-col>
            <v-col>
              <strong>JTK menyelenggarakan program Rekognisi Pembelajaran Lampau untuk program studi D4 Teknik Informatika atas penugasan dari Dikti dalam rangka menginisiasi program pendidikan tersebut di Indonesia.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2012</strong>
            </v-col>
            <v-col>
              <strong>Program studi D4 Teknik Informatika mendapatkan nilai akreditasi B dari BAN-PT.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2016</strong>
            </v-col>
            <v-col>
              <strong>Program studi D4 Teknik Informatika direakreditasi dan mendapatkan nilai A dari BAN-PT</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          color="black"
          
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2018</strong>
            </v-col>
            <v-col>
              <strong>Program studi D3 Teknik Informatika direakreditasi dan kembali mendapatkan nilai A dari BAN-PT.</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline></div>
    </div>
    

</template>
<style>
.b {
   color : #111F4D 
}

</style>
<script>
import axios from "axios";

  export default {
    components: {
    
   },

    data () {
      return {
        carousel: [],
        CMS_API: process.env.VUE_APP_CMS_API,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [{
          img : "https://res.cloudinary.com/kelompok-b7/image/upload/v1653566467/Group_208_991116458a.png",
          text : "Riwayat Singkat JTK"
        }
        ],
        items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Riwayat JTK',
          disabled: true,
          href: '/riwayatJTK',
        }
      ],
      riwayatJTK_text : ""
        
      }

    },
    beforeMount() {
    this.fetchData();
   },
   methods: {
    async fetchData() {
      const riwayat = await axios.get(this.CMS_API + "riwayat-jtk");
      //const logoHeader = await axios.get(this.CMS_API + "/logo-header");
      var i;
      this.riwayatJTK_text = riwayat.data.riwayatJTK
      console.log(riwayat.data)
      //console.log(this.carousel[0].gambar_artikel[0].url)
      //console.log(this.carousel[1])
    },
    
  },
  }
</script>

<style >

</style>

