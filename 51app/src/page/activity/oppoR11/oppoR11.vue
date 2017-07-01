<template>
  <div id="oppoR11">
    <img src="https://fs.51fanbei.com/h5/app/activity/06/oppo12_1.png">
    <!-- banner -->
    <img :src="bannerlist">
    <!-- 手机小图 -->
    <!-- <div class="mobileList clearfix">
      <img v-for='i of 4' :src="mobileList[i-1]" @click="curState(i)">
    </div> -->
    <ul class="mobileList clearfix">
      <li v-for='i of 4' @click="mobileList(i)" :class="show[i-1]? 'item'+i:'item'"></li>
    </ul>
    <!-- <img v-for='i of 4' v-show="show[i-1]" :src="'/images/activity/06/oppo12_3'+i+'.png'"> -->
    <!-- 文案 -->
    <p class="priceContent">{{priceContent}}</p>
    <!-- 点击购买 -->
    <a href="#"><img src="https://fs.51fanbei.com/h5/app/activity/06/oppo12_2.png"></a>
    <!-- 配件 -->
    <img src="https://fs.51fanbei.com/h5/app/activity/06/oppo11_4.png" @onclick="getGoodsInfo()">
    <!-- 手机列表 -->
    <ul class="goodsMobileList clearfix">
      <li v-for="item in goodsMobileListMap.goodsList" @click="goGoodsDetail(item.goodsId)">
        <p>{{item.goodsId}}</p>
        <img :src="item.goodsIcon">
        <div class="mobileListContent">
          <p><i></i>{{item.goodsName}}</p>
          <span>{{item.realAmount}}</span>
          <span>{{item.remark}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'oppoR11',
    data(){
      return{
        bannerlist: 'https://fs.51fanbei.com/h5/app/activity/06/oppo12_31.png',
        // mobileList: [
        //   'https://fs.51fanbei.com/h5/app/activity/06/oppo12_gold1.png',
        //   'https://fs.51fanbei.com/h5/app/activity/06/oppo12_roseGold1.png',
        //   'https://fs.51fanbei.com/h5/app/activity/06/oppo12_black1.png',
        //   'https://fs.51fanbei.com/h5/app/activity/06/oppo12_red1.png',
        // ],
        show: [
          true,
          false,
          false,
          false,
        ],
        priceContent: '¥2999 月供 ¥302起',
        goodsMobileListMap: []
        // notifyUrl: ''
      }
    },
    props: {
      'src': 'src'
    },
    created:function(){  // 创建完毕状态
      let _this=this;
      let page=0;

      _this.$http.post('api/app/activity/getSelfSupportGoodsInfo', {
        pageNo: page
      })
      .then(function (response) {
        _this.goodsMobileListMap=response.data.data;
        // _this.notifyUrl=response.data.data.notifyUrl;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    methods:{
      curState(e){
        // let _this=index;
        // let _this=e.target
        // console.log(_this.src);

        // for(let i=0;i<this.show.length;i++){
        //   this.show.splice(i, 1, false);  // 其他的为false
        // }
        // this.show.splice(e-1, 1, true);  // 点击当前的为true


      },
      goGoodsDetail(id){
        let _this=this;
        window.location.href=_this.notifyUrl+'&params={"privateGoodsId":"'+id+'"}'
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
  .mobileList li{
    float: left;
    width: 1.3rem;
    height: 0.57rem;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    background-size: cover;
    margin-right: 0.4rem;
  }
  .mobileList li:first-child{
    margin-left: 0.5rem;
    background-image: url("https://fs.51fanbei.com/h5/app/activity/06/oppo12_gold1.png");
  }
  .mobileList li:nth-child(2){
    background-image: url("https://fs.51fanbei.com/h5/app/activity/06/oppo12_roseGold1.png");
  }
  .mobileList li:nth-child(3){
    background-image: url("https://fs.51fanbei.com/h5/app/activity/06/oppo12_black1.png");
  }
  .mobileList li:nth-child(4){
    background-image: url("https://fs.51fanbei.com/h5/app/activity/06/oppo12_red1.png");
  }
  .mobileList li.item1{
    background-image: url("https://fs.51fanbei.com/h5/app/activity/06/oppo12_gold2.png");
  }
  .mobileList li.item2{
    background-image: url("https://fs.51fanbei.com/h5/app/activity/06/oppo12_roseGold2.png");
  }
  .mobileList li.item3{
    background-image: url("https://fs.51fanbei.com/h5/app/activity/06/oppo12_black2.png");
  }
  .mobileList li.item4{
    background-image: url("https://fs.51fanbei.com/h5/app/activity/06/oppo12_red2.png");
  }

  .priceContent{
    margin: 0.4rem auto;
    text-align: center;
    color: #169a73;
  }
  /*手机型号列表*/
  .goodsMobileList{
    padding: 0.4rem;
  }
  .goodsMobileList li{
    float: left;
    width: 3.25rem;
    border: 1px solid green;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .goodsMobileList li:nth-child(2n+1){
    margin: 0 0.2rem 0.2rem 0;
  }
  .goodsMobileList a{
    color: #fff;
  }
  .goodsMobileList img{
    height: 3.25rem;
  }
  .mobileListContent{
    padding: 0.1rem;
    color: #000;
  }
  .mobileListContent p{
    padding-left: 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mobileListContent i{
    width: 0.04rem;
    height: 0.2rem;
    margin-right: 0.1rem;
    background-color: green;
  }
  .mobileListContent span{
    padding-left: 0.2rem;
  }

  .item1{

  }

  /*.buyBtn{
    color: #fff;
    background-color: #000;
  }
  .buyBtn p{
    width: 2.54rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: center;
    border-radius: 0.35rem;
    background-color: #169a73;
    margin: 0 auto;
  }*/







</style>
