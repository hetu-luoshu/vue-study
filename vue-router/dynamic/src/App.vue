<script setup>
</script>

<template>
  <suspense>
    <template #default>
      <div class="container">

        <nav>
          <template v-for="route in $router.getRoutes()">
            <router-link :to="{ name: route.name }" v-if="route.meta?.title">
              {{ route.meta?.title }}
            </router-link>
          </template>

          <!-- <router-link :to="{ name: 'article', query: { id: 1 } }">article</router-link> -->
        </nav>
        
        <main>
          <router-view #default="{ Component }">
            <component :is="Component"></component>
          </router-view>
        </main>

      </div>
    </template>
  </suspense>
</template>

<style lang="scss" scoped>
.container {
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
  }
}
</style>
