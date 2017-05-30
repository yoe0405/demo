<template>
  <div class="Hi">
    <h2>{{ msg }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'I am Hi page'
    }
  }
}
</script>

<!-- scoped可以让css只在当前的页面有作用 -->
<style scoped>
  
</style>
