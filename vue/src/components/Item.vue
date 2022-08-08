<script setup>
import useTodo from '../composables/useTodo';

const { del } = useTodo();

const { todo } = defineProps({
    todo: {
        type: Object,
        required: true
    }
});


</script>

<template>
  <div class="item">
    <input type="text" :value="todo.title" >
    <button @click="del(todo.id)">删除</button>
  </div>
</template>

<style lang="scss">
div.item {
    display: flex;
    width: 100%;
    margin: 10px 0;
    input {
        padding: 10px;
        flex: 1;
    }
}
</style>
