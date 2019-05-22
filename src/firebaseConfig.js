import firebase from 'firebase'
//import 'firebase/firestore'
import Vuex from 'vuex'
import store from './store'

// firebase init goes here
const config = {
		apiKey: "AIzaSyDqGxjVmQ8L_Qq5IpQJ3QR27xCeUVizURo",
		authDomain: "atanfinans.firebaseapp.com",
		databaseURL: "https://atanfinans.firebaseio.com",
		projectId: "atanfinans",
		storageBucket: "atanfinans.appspot.com",
		messagingSenderId: "766080217735"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
var currentUser = null

// https://firebase.google.com/docs/auth/web/manage-users
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("--FB Kullanıcı Giriş Yaptı--")
    store.commit('setCurrentUser', user)
  } else {
    console.log("--FB Kullanıcı Giriş Yapmamış Gözüküyor--")
    store.commit('setCurrentUser', null)
  }
});

// firebase collections
//const usersCollection = db.collection('users')
export {

    db,
    auth,
    currentUser
}
