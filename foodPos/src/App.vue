
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 左侧导航栏 -->
    <leftNav></leftNav>
    <!-- 右侧内容栏 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav'
  export default {
    name: 'app',
    components: {
      leftNav
    }
  }
</script>

<style>
  #app {
    font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  .main{
    float: left;
    width: 95%;
    height: 100%;
    overflow: hidden;
    background-color: #eff2f7;
  }
</style>
