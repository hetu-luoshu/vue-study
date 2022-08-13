<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const articles = await await fetch('http://127.0.0.1:10086/article').then(r => r.json())

const article = ref(await fetch('http://127.0.0.1:10086/article/' + (route.query.id ?? 1)).then(r => r.json()));

watch(() => route.query, async query => {
  if (route.path.includes('article')) {
    article.value = await fetch('http://127.0.0.1:10086/article/' + query.id).then(r => r.json());
  }
})

</script>

<template>
  <div class="page">
    <div class="content">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
    </div>
    <div class="nav">
      <router-link :to="{ name: 'article', query: { id: item.id } }" v-for="item in articles" :key="item.id">
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;

  .content {
    grid-column: span 8;
  }

  .nav {
    grid-column: span 4;

    a {
      display: block;
      box-sizing: border-box;
      padding: 10px 20px;
      margin-bottom: 10px;
      background-color: aquamarine;
    }
  }
}
</style>