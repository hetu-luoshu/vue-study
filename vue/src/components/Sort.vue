<script setup>
import useTodo from '../composables/useTodo';

const { orderBy } = useTodo();  

const order = () => {
    orderBy.value = orderBy.value === 'asc' ? 'desc' : 'asc';
}

</script>

<template>
  <div class="sort">
    <button @click="order">
        {{ orderBy === 'asc' ? '升序' : '降序' }}
    </button>
  </div>
</template>

<style lang="scss">
div.sort {
    display: flex;
    input {
        flex: 1;
        padding: 10px;
        border: 2px solid #8E44AD;
    }
}
</style>
