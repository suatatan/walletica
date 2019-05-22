<template lang="html">
  <div id="login_logout">
    <div v-if="currentUser">
      <div id="logout">
        <p>Çıkış yapmak için aşağıdaki butonu tıklayın</p>
        <button class="button is-primary" type="button" name="button" @click="logout">Çıkış Yap</button>
      </div>
    </div>
    <div v-else>

      <div id="login"  >
        <br>
        <div class="box">
          <p>Giriş yapmanız gerekiyor. Mevcut Google Adresinizle giriş yapabilirsiniz</p>
          <br>
          <button type="button" name="button" @click="login" class="button is-info">Giriş Yap</button>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>

import firebase from 'firebase'
import { mapState } from 'vuex'

  export default {
    name: 'Login',
    computed: {
      ...mapState(['currentUser']),
    },
    methods: {
      login() {
        const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then((result) => {
            var user = result.user;
            console.log(user);
            this.$store.commit('setCurrentUser', user)
            this.$router.replace("Ozel");
          }).catch((err)=> {
            alert("Bir hata oluştu sonra tekrar deneyi lütfen"+err.mesage)
        });
      },
      logout(){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
          console.log("Çıkış başarılı")
            alert("Çıkış yapıyorsunuz")
          window.location ="/"
        }).catch(function(error) {
        // An error happened.
          alert("Bir hata oldu, çıkış yapılamadı.:"+error.message)
        });
      }
  }
}
</script>
<style lang="css">
</style>
