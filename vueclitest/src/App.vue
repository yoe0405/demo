<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
     
      <router-link to="/">首页</router-link> |
    <!--  <div><router-link to="/hi">Hi页面</router-link> |
      <router-link to="/hi/hi1">Hi1页面</router-link> |
      <router-link :to="{name:'hi2',params:{username:'yoe',id:'333'}}">Hi2页面</router-link>
    </div>
    <p>{{ $route.name }}</p> -->
   
    <!-- <router-view name="left" style="float: left; width: 50%; height: 300px; background-color: pink;"></router-view>
    <router-view name="right" style="float: left; width: 50%; height: 300px; background-color: green;"></router-view> -->

    <router-link to="/params/1220/jason is a singer">Params</router-link>  |
    <router-link to="/goHome">goHome</router-link> ｜
    <router-link to="/goParams/12203/is a singer boy">goParams</router-link> ｜
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
