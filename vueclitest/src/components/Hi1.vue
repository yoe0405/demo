<template>
  <div class="Hi1">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'I am Hi1 page'
    }
  }
}
</script>

<!-- scoped可以让css只在当前的页面有作用 -->
<style scoped>
  
</style>
