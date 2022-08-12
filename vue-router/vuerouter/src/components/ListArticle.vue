<script setup>
import { ref } from 'vue';
import api from '@/api/article';
const articles = ref(await api.all())
</script>


<template>
<div class="list">
  <router-link v-for="article in articles" :key="article.id" :to="{ name: 'article-show', params: { id: article.id } }" class="list-item">{{ article.title }}</router-link>
</div>
</template>

<style lang="scss" scoped>
.list-item {
  color: #333;
  text-decoration: none;
  display: block;
  padding: 10px;
  margin-bottom: 8px;
}
</style>