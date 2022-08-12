<script setup>
</script>

<template>
  <nav>
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'about' }">about</router-link>
    <router-link :to="{ name: 'login' }">login</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  a {
    padding: 10px 20px;
    background-color: aquamarine;
    color: #666;
  }
}
main {
  background-color: #f1f1f1;
  margin-top: 10px;
  padding: 20px;
}
</style>
