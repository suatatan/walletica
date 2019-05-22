import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy' // izah: tüm sayfalara etki etsin diye global import main.js e
import 'buefy/dist/buefy.css'
const fb = require('./firebaseConfig.js') //izah: firebase uygulamasının çalışması için bu gereklidir.

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
