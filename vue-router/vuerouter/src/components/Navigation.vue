<script>

</script>
<template>
<div class="navigation">
  <router-link exact-active-class="exact-active" :to="{ name: 'home' }">首页</router-link>
  <router-link exact-active-class="exact-active" :to="{ name: 'article' }">文章列表</router-link>
  <router-link exact-active-class="exact-active" :to="{ name: 'user' }">用户列表</router-link>
</div>
</template>

<style lang="scss" scoped>
.navigation {
  a {
    display: inline-block;
    padding: 10px 5px;
    background-color: #FFF;
    text-decoration: none;
    &.exact-active {
      background-color: aquamarine;
    }
  }
  margin-bottom: 10px;
}
</style>