<script setup>
</script>

<template>
  <nav>
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'about' }">about</router-link>
  </nav>
  <main>
    <router-view #default="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>

</template>

<style lang="scss" scoped>
nav {
  display: flex;

  a {
    padding: 10px 20px;
    background-color: rgb(30, 100, 77);
    color: #fff;
    margin-right: 10px;
  }
}

main {
  margin-top: 20px;
  position: relative;
}

.fade-enter-from, .fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter-to, .fade-leave-from {
  transform: translateX(0);
}
</style>
