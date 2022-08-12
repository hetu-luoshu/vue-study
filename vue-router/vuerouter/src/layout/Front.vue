<script setup>
import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <div class="front-container">
    <navigation />
    <!-- <router-view name="navigation" #default="{ Component }">
      <component :is="Component ?? Navigation"></component>
    </router-view> -->
    <div class="layout-front">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.front-container {
  .layout-front {
    background-color: #979090;
    padding: 10px;
  }

}
</style>