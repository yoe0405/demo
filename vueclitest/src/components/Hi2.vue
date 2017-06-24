<template>
  <div class="Hi2">
    <h2>{{msg}}--{{$route.params.username}}--{{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {
  name: 'hi2',
  data () {
    return {
      msg: 'I am Hi2 page'
    }
  }
}
</script>

<!-- scoped可以让css只在当前的页面有作用 -->
<style scoped>
  
</style>
