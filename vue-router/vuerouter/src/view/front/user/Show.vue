<script setup>
import { useRoute } from 'vue-router';
import api from '@/api/user';

const route = useRoute();

const user = await api.find(route.params.id)

</script>


<template>
<div class="show">
  <h2>{{ user.name }}</h2>
</div>
</template>

<style lang="scss" scoped>
.show {
  background-color: aliceblue;
  padding: 10px;
  box-sizing: border-box;
  p {
    color: #666;
    line-height: 1.7;
  }
}
</style>