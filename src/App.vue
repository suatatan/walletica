<template>
  <div id="app" class="container">
    <div id="nav" class="navbar">
      <router-link to="/" class="navbar-item">Anasayfa</router-link>
      <router-link to="/about"  class="navbar-item">Hakkında</router-link>
      <router-link to="/ozelsayfa"  class="navbar-item">Özel</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
