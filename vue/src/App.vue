<script setup>
import Todo from './components/Todo.vue';

</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <div>
          <Todo />
        </div>
      </template>
      <template #fallback>
        <div>
          Loading...
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss">
div {
  color: #FFF;
}
</style>
