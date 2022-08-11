<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import api from '@/api/article';
import ListArticle from '@/components/ListArticle.vue';

const route = useRoute();

const article = ref();

article.value = await api.find(route.params.id)

watch(async () => {
  article.value = await api.find(route.params.id)
})

</script>


<template>
<div class="show">
  <div class="content">
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
  </div>
  <div class="list">
    <ListArticle></ListArticle>
  </div>
</div>
</template>

<style lang="scss" scoped>
.show {
  display: flex;
  background-color: aliceblue;
  padding: 10px;
  box-sizing: border-box;
  .content {
    flex: 1;
    p {
      color: #666;
      line-height: 1.7;
    }
  }
  
  .list {
    width: 360px;
    a {
      display: block;
      margin-bottom: 5px;
      padding: 10px 5px;
      background-color: aquamarine;
    }
  }
}
</style>