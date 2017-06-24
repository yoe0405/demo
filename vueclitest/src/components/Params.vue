<template>
  <div class="Params">
    <h2>{{ msg }}</h2>
    <p>新闻ID：{{ $route.params.newsId }}</p>
    <p>新闻ID：{{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Params',
  data () {
    return {
      msg: 'Params page'
    }
  }
}
</script>

<style scoped>
  
</style>