<template>
  <div id="app" class="container">
    <div id="nav" class="navbar">
      <router-link to="/" class="navbar-item">Anasayfa</router-link>
      <router-link to="/about"  class="navbar-item">Hakkında</router-link>
      <router-link to="/ozelsayfa"  class="navbar-item">Özel</router-link>
      <router-link to="/harcamalar"  class="navbar-item">Harcamalar</router-link>
      <router-link to="/harcamakaydi"  class="navbar-item">Harcama Kaydı</router-link>
      <router-link to="/login"  class="navbar-item">Çıkış</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
