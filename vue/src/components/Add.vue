<script setup>
import { ref } from 'vue';
import useTodo from '../composables/useTodo';

const title = ref('');

const onSubmit = () => {
    useTodo().add({ title: title.value });
    title.value = '';
}

</script>

<template>
  <div class="add">
    <input type="text" v-model="title" @keyup.enter="onSubmit" >
  </div>
</template>

<style lang="scss">
div.add {
    display: flex;
    input {
        flex: 1;
        padding: 10px;
        border: 2px solid #8E44AD;
    }
}
</style>
