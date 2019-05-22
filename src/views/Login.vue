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

        <div class="box">
          <p>Giriş yapmanız gerekiyor.</p>
          <b>Gmail Adresinizle giriş yapabilirsiniz</b>
          <br>
          <button type="button" name="button" @click="login" class="button is-info">Giriş Yap</button>
        </div>

        <div class="box">
          <p>AtanFinans uygulaması ile giderlerinizi cep telefonu veya bilgisarınızdan kayıt altına alın.</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

import firebase from 'firebase'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

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
