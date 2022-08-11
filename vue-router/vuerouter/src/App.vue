<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
  <navigation></navigation>
  <Suspense>
    <template #default>
      <div class="router-view">
        <router-view></router-view>
      </div>
    </template>
  </Suspense>
</template>

<style lang="scss" scoped>
.router-view {
  background-color: #979090;
  padding: 10px;
}
</style>
