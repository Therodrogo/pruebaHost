import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel';

import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'
import 'animate.css';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueCarousel);
Vue.use(Vuesax, {
  colors: {
      primary:'#DE6283',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)'
    }
})

axios.defaults.baseURL = 'http://localhost:3000/api';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
