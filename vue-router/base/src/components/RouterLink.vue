<script setup>
import { path } from '../router'
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const push = () => {
  path.value = props.to
}

</script>

<template>
  <a href="#" @click.prevent="push">
    <slot></slot>
  </a>
</template>
