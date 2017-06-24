
<template>
  <div class="leftNav">
    <ul>
      <li><i class="icon iconfont icon-goumai"></i><p>收银</p></li>
      <li><i class="icon iconfont icon-dianpu"></i><p>店铺</p></li>
      <li><i class="icon iconfont icon-hanbao"></i><p>商品</p></li>
      <li><i class="icon iconfont icon-tongji"></i><p>统计</p></li>
      <!-- <li><i class="icon iconfont icon-shezhi"></i><p>设置</p></li> -->
    </ul>
  </div>
</template>

<script>
  export default{

  }
</script>

<style>
  .leftNav{
    float: left;
    width: 5%;
    height: 100%;
    color: #fff;
    font-size: 10px;
    background-color: #1d8ce0;
  }
  .leftNav ul{
    padding: 0;
    margin: 0;
  }
  .leftNav li{
    padding: 10px 0;
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
  }
  .leftNav p{
    margin: 0;
  }
  .iconfont{
    font-size: 24px;
  }

</style>
