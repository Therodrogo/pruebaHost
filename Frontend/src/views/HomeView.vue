<template>
  <div class="contenedor">
      <Carrusel/>
    <vs-row>
      <vs-col v-for="(carta, index) in this.$store.state.cartas" :key="index" w="4">

          <Carta :carta=carta />

      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Carta from '@/components/Carta.vue'
import Carrusel from '../components/Carrusel.vue'

export default {
  name: 'HomeView',
  components: {
    Carta,
    Carrusel
},
  data(){
    return{
      cosas:[1,2,3,4,5]
    }
  },
  methods:{
    listarCartas(){
      this.axios.get('/carta')
      .then((res) => {

          this.$store.state.cartas = res.data

      })
      .catch((e)=>{
          console.log(e.response);
      })
    },
    
  },
  mounted(){
    this.listarCartas()
  }
}
</script>

<style>


</style>