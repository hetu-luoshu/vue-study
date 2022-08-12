<script setup>
</script>

<template>
  <Suspense>
    <template #default>
      <router-view></router-view>
    </template>
  </Suspense>
</template>

<style lang="scss">

.link-active {
  background-color: rgb(21, 109, 79);
  color: #FFF;
}
</style>
