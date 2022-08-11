<script setup>
import { ref } from 'vue';
import api from '@/api/user';
const users = ref(await api.all())
</script>


<template>
<div>

  <router-link v-for="user in users" :key="user.id" :to="`/userShow/${user.id}`" class="list-item">{{ user.name }}</router-link>
</div>
</template>

<style lang="scss" scoped>
.list-item {
  color: #333;
  text-decoration: none;
  display: block;
  padding: 10px;
  background-color: aquamarine;
  margin-bottom: 8px;
}
</style>