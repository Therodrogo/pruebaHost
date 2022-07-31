
<template>
    <div class="hidden">
      <vs-navbar shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <!-- pueder ir foto -->
            ---
          </vs-button>
        </template>

        <vs-navbar-item to="/" :active="active == 'inicio'" id="inicio" >
            <div class="texto">
                Inicio
            </div>
         
        </vs-navbar-item>

        <vs-navbar-item to="/about" :active="active == 'about'" id="about">
            <div class="texto">
                About
            </div>
        </vs-navbar-item>
        <vs-navbar-item to="/nosotros" :active="active == 'nosotros'" id="nosotros">
            <div class="texto">
                Nosotres
            </div>
        </vs-navbar-item>

        <template #right>
          <vs-button flat to="/admin" >Iniciar Sesion</vs-button>
          <vs-button>Salir</vs-button>
        </template>
      </vs-navbar>

<!-- de aqui cosa de la deracha -->

      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <!-- puder ser foto -->
          </template>
          Inicio falso
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
            <!-- puder ser foto -->
          </template>
          espacio
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <!-- puder ser foto -->
          </template>
          espacio
        </vs-sidebar-item>

        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <!-- puder ser foto -->
              </template>
              espacio en el espacio
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="Instagram">
            <template #icon>
              <!-- puder ser foto -->
            </template>
            espacio
          </vs-sidebar-item>
          <vs-sidebar-item id="twitter">
            <template #icon>
              <!-- puder ser foto -->
            </template>
            espacio
          </vs-sidebar-item>
          <vs-sidebar-item id="Facebook">
            <template #icon>
              <!-- puder ser foto -->
            </template>
            espacio
          </vs-sidebar-item>
        </vs-sidebar-group>

    
      </vs-sidebar>

    </div>
  </template>
<script>
  export default {
    data:() => ({
      active: 'home',
      activeSidebar: false
    })
  }
  </script>

<style scoped>
.texto{
    color: rgb(0, 0, 0);
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
}


</style>