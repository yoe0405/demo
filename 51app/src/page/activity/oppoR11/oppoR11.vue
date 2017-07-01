<template>
  <div id="oppoR11">
    <img src="https://fs.51fanbei.com/h5/app/activity/06/oppo12_1.png">
    <img :src="bannerlist">
    <div class="mobileList clearfix">
      <img v-for='i of 4' :src="mobileList[i-1]" @click="data()">
    </div>
    <!-- <img v-for='i of 4' v-show="show[i-1]" :src="'/images/activity/06/oppo12_3'+i+'.png'"> -->
    <p class="priceContent">{{priceContent}}</p>
    <a href="#"><img src="https://fs.51fanbei.com/h5/app/activity/06/oppo12_2.png"></a>
    <img src="https://fs.51fanbei.com/h5/app/activity/06/oppo11_4.png" @onclick="getGoodsInfo()">
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'oppoR11',
    data(){
      return{
        bannerlist: 'https://fs.51fanbei.com/h5/app/activity/06/oppo12_31.png',
        mobileList: [
          'https://fs.51fanbei.com/h5/app/activity/06/oppo12_gold1.png',
          'https://fs.51fanbei.com/h5/app/activity/06/oppo12_roseGold1.png',
          'https://fs.51fanbei.com/h5/app/activity/06/oppo12_black1.png',
          'https://fs.51fanbei.com/h5/app/activity/06/oppo12_red1.png',
        ],
        priceContent: '¥2999 月供 ¥302起',
        goodsList: []
      }
    },
    created:function(){  // 创建完毕状态

      const _this=this;
      // console.log(_this);
      _this.getGoodsInfo();

      // 拉取常用商品数据
      // axios.post('http://testapp.51fanbei.com/app/activity/getSelfSupportGoodsInfo', {
      //   userName: 'userName'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      // http://jspang.com/DemoApi/typeGoods.php

    },
    methods:{
      getGoodsInfo(){
        let _this=this;
        let data=_this.$axios;
        console.log(data);

        // _this.$http.post('app/activity/getSelfSupportGoodsInfo', {
        //   // userName: '13500000405'
        // })
        // .then(function (response) {
        //   console.log(2222);
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });



      }
    }
  }
</script>

<style scoped>
  .mobileList img{
    float: left;
    width: 1.29rem;
    height: 0.57rem;
    margin-right: 0.4rem;
  }
  .mobileList img:first-child{
    margin-left: 0.5rem;
  }
  .priceContent{
    margin: 0.4rem auto;
    text-align: center;
    color: #169a73;
  }
</style>
