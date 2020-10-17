import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import "./assets/css/normal.css"
import store from './store/index'
Vue.config.productionTip = false

import  FastClick  from  'fastclick'

FastClick.attach(document.body);
new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
