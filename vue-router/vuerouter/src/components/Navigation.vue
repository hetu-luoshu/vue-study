<script>

</script>
<template>
<div class="navigation">
  <router-link :to="{ name: 'home' }">首页</router-link>
  <router-link :to="{ name: 'article' }" :class="{'link-active': $route.path.includes('article')}">文章列表</router-link>
  <router-link :to="{ name: 'user' }">用户列表</router-link>
  <router-link :to="{ name: 'member' }">会员中心</router-link>
</div>
</template>

<style lang="scss" scoped>
.navigation {
  background-color: #FFF;
  a {
    display: inline-block;
    padding: 10px 5px;
    text-decoration: none;
  }
  margin-bottom: 10px;
}
</style>