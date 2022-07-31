<template>
  <div id="app">
    <BarraMenu/>
    
    <router-view/>
  </div>
</template>


<script>
import BarraMenu from '@/components/BarraMenu.vue'

export default {
  name: 'HomeView',
  components: {
    BarraMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

.contenedor{
  margin-top: 70px;
  margin-left: 10%;
  margin-right: 10%;

  font-family: 'Roboto', sans-serif;
}
</style>
