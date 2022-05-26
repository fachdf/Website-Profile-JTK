<template>
     <nav>
    <v-toolbar color="#FFFFFF" height="80px">
     <v-toolbar-title class="text-uppercase grey--text" >
      <v-btn height="60" @click="toHome()" color="transparent">
          <v-img
          :src="require('../assets/logo.png')"
          />
      </v-btn>
     </v-toolbar-title>
     <div class="search">
     
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>  

      <v-menu :rounded="rounded" open-on-hover offset-y transition="slide-x-transition" bottom right >
        <template v-slot:activator="{on, attrs}">
            <v-btn text class="font-weight-bold" flat v-bind="attrs" v-on="on">
                <h3 class="font-weight-bold btext">
                    <b>Tentang JTK</b>
                </h3>
            </v-btn>
        </template>
            <v-list dense>
                    <v-list-item v-for="(item, index) in tentangJTK" :key="index" router :to="item.link">
                       <v-list-item-action>
                            <v-list-item-title class="font-weight-bold btext"><h3>{{ item.title }}</h3></v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
      </v-menu>

      <v-menu :rounded="rounded" open-on-hover offset-y transition="slide-x-transition" bottom right >
        <template v-slot:activator="{on, attrs}">
            <v-btn text class="font-weight-bold" flat v-bind="attrs" v-on="on">
                <h3 class="font-weight-bold btext">
                    <b>Pendidikan</b>
                </h3>
            </v-btn>
        </template>
            <v-list dense>
                    <v-list-item v-for="(item, index) in pendidikan" :key="index" router :to="item.link">
                       <v-list-item-action>
                            <v-list-item-title class="font-weight-bold btext"><h3>{{ item.title }}</h3></v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
      </v-menu>

      <v-btn  @click="toBeranda()" text >
        <h3 class="font-weight-bold btext"><b>Penghargaan</b></h3>
      </v-btn>

      <v-btn  to="/kerjasama" text >
        <h3 class="font-weight-bold btext"><b>Kerjasama</b></h3>
      </v-btn>
      
      <v-btn  @click="toBeranda()" text >
        <h3 class="font-weight-bold btext"><b>Kontak</b></h3>
      </v-btn>
    
    </v-toolbar>

 </nav>
</template>
<style>
.btext {
   color : #111F4D 
}
</style>
<script>

export default {
    name: 'App',
    components:{},
    data: () => ({
        tentangJTK: [{
                title: "Sejarah",
                link: "/sejarah"
            },
            {
                title: "Alumni",
                link: "/alumni"
            },
            {
                title: "Fasilitas",
                link: "/fasilitas"
            }
        ],
        pendidikan: [{
                title: "Agenda",
                link: "/agenda"
            },
            {
                title: "Kurikulum",
                link: "/kurikulum"
            },
            {
                title: "Dosen",
                link: "/dosen",
            },
            {
                title: "Pegawai",
                link: "/pegawai",
            }
        ]
    }),
    methods : {
        toHome(){this.$router.push({ path: "/" });}
    }
    
}

</script>
