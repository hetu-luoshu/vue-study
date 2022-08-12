<script setup>
</script>

<template>
  <div class="member-container">
    <div class="layout-member">
      <nav>
        <router-link exact-active-class="exact-active" :to="{ name: 'home' }">首页</router-link>
        <router-link exact-active-class="exact-active" :to="{ name: 'member' }">绑定手机</router-link>
        <router-link exact-active-class="exact-active" :to="{ name: 'email' }">绑定邮箱</router-link>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.member-container {
  .layout-member {
    background-color: #979090;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    nav {
      grid-column: span 3;
      display: flex;
      flex-direction: column;

      a {
        padding: 10px;
        margin-bottom: 5px;
        background-color: #FFF;
        &.exact-active {
          color: #FFF;
          background-color: rgb(30, 133, 99);
        }
      }
    }

    main {
      grid-column: 9;
    }
  }

}
</style>