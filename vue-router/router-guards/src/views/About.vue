<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  beforeRouteEnter(_, __, next) {
    new Promise(___ => {
      setTimeout(() => {
        next(vm => vm.title = 'hello wrold')
      }, 100)
    })
  },
  beforeRouteLeave(_, __, next) {
    if (confirm('真的要离开吗？数据会消失哦')) {
      next()
    }
  }
} 
</script>

<template>
  about -- {{ title }}
</template>

<style lang="scss" scoped>
</style>