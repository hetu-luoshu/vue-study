<script setup>
import Item from './Item.vue';
import Add from './Add.vue';
import Sort from './Sort.vue';
import useTodo from '../composables/useTodo';
import AnimateList from './AnimateList.vue';

const { todos, load } = useTodo();
load();

</script>

<template>
  <Add />
  <Sort />
  <div class="todo">
    <AnimateList :duration="0.5" :delay="0.1">
      <Item v-for="(todo, index) in todos" :todo="todo" :key="todo.id" :data-index="index" />
    </AnimateList>
  </div>
 
</template>

<style lang="scss">
div.todo {
    display: flex;
    flex-direction: column;
    position: relative;
}
</style>
