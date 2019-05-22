import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase' //izah: firebase'nin store.js ile işlem yapabilmesi için gerekli
const fb = require('./firebaseConfig.js')
var db = firebase.firestore();
var currentUser = null
var d = new Date();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        currentUser: null,
        cariAy: d.getMonth(),
        cariYil: d.getFullYear(),
        harcamalar: [],
        toplam_harcama:0,
        kategorikDagilim: []
  },
  mutations: {
    setCurrentUser(state, val) {
            state.currentUser = val
            console.log("currentUser vuex store'da commitlendi :"+state.currentUser.email)
        }
  },
  actions: {
    clearData() {
            console.log("-----currentUser console store'da null hale getirildi-----")
            store.commit('setCurrentUser', null)

  }

  }
})
