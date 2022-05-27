<template>
 <div align = right class="title">
      <p class="display-2 ml-10 mt-10 btext font-weight-bold" >Fasilitas</p>
          <v-sheet
            elevation="1"
            padding-left="10"
            height="5"
            width="300"
           color="#FF6600"
          > 
          </v-sheet>
      <v-row
          class="fill-height ml-9 mt-5"
          align="left"
          justify="left" 
        >

        <div class=" black--text text-h3 " align="left"
          justify="left">
            <v-img
                class="ml-15"
                margin-left="5"
                max-height="400"
                max-width="600"
                src="https://res.cloudinary.com/kelompok-b7/image/upload/v1653572229/lab_e3c81fd48c.png"
            ></v-img>
        </div>
        <div align=right class="fasilitas">
          
          <p align= left class="btext ml-10 mt-15">- Laboratorium Rekayasa Perangkat Lunak
                <br> - Laboratorium Sistem Informasi dan Basis Data
                <br> - Laboratorium Multimedia
                <br> - Laboratorium Jaringan dan Teknologi Informasi
            </p>
        </div>
            
        </v-row>
        <v-sheet
        height="50"
        width="100%"
        color="white"
      > 
      </v-sheet>
    </div>
</template>

<style scoped>
.tittle{
    width:67%
}
.fasilitas{
    width: 35%;
    padding-left: 50;
}
</style>