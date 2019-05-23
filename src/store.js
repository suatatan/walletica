import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase' //izah: firebase'nin store.js ile işlem yapabilmesi için gerekli
const fb = require('./firebaseConfig.js')
import harcama_karti from '@/myjs/harcama_karti'
var db = firebase.firestore();
var currentUser = null
var d = new Date();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        db: db,
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
            console.log("currentUser vuex store'da commitlendi :"+state.currentUser)
            //izah: yeni kullanıcının kayıt oluşturması durumu için kayıtlarda ona eğer yoksa hesap kartı tanımlanır
            //mevcut mu diye kontrol
            //every user must have an email

            harcama_karti.ekle(state)


        }
  },
  actions: {
    clearData() {
            console.log("-----currentUser console store'da null hale getirildi-----")
            store.commit('setCurrentUser', null)

  }

  }
})
