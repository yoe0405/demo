
<template>
  <div class="pos">
    <el-row>
      <!-- 左侧盒子 -->
      <el-col :span="7" class="posOrder" id="posOrderList">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%;">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="70"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 数量／金额 -->
            <div class="total">
              <small>数量：</small><big>{{totalCount}}</big> &nbsp;&nbsp;&nbsp;&nbsp;  <small>金额：</small><big>{{totalMoney}}元</big>
            </div>
            <!-- 挂单／删除／结账 -->
            <div class="btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods()">删除</el-button>
              <el-button type="success" @click="checkout()">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- 右侧盒子 -->
      <el-col :span="17">
        <!-- 常用商品 -->
        <div class="oftenGood">
          <div class="oftenGoodTitle">常用商品</div>
            <div class="oftenGoodList">
              <ul>
                <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="oftenGoodListPrice">¥{{goods.price}}</span>
                </li>
              </ul>
            </div>
        </div>
        <!-- 商品列表tab -->
        <div class="goodsType">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class='cookList'>
                <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                  <!-- <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span> -->
                  <img class="foodImg" :src="goods.goodsImg">
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>
                <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                  <img class="foodImg" :src="goods.goodsImg">
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList'>
                <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                  <img class="foodImg" :src="goods.goodsImg">
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList'>
                <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                  <img class="foodImg" :src="goods.goodsImg">
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    name: 'pos',
    data(){
      return{
        tableData: [],
        oftenGoods: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
        totalMoney: 0,
        totalCount: 0
      }
    },
    created: function(){  // 一创建就开始拉取数据

      // 拉取常用商品数据
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then(reponse=>{
        this.oftenGoods=reponse.data;
      })
      .catch(error=>{
        console.log(reeor);
        alert('网络错误，不能访问');
      })

      // 拉取分类商品数据
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(reponse=>{
        this.type0Goods=reponse.data[0];
        this.type1Goods=reponse.data[1];
        this.type2Goods=reponse.data[2];
        this.type3Goods=reponse.data[3];
      })
      .catch(error=>{
        console.log(reeor);
        alert('网络错误，不能访问');
      })

    },
    mounted: function(){ // 当所有的dom加载完之后，再执行里面的东西
      //let orderHight=document.body.clientHeight;  // js原生的方法获得订单高度
      let orderHight=$(document).height();
      $("#posOrderList").css('height', orderHight+'px');
    },
    methods: {
      //添加订单列表的方法
      addOrderList(goods){

        // 添加之前清零之前的数据
        this.totalMoney=0;  // 汇总钱数清零
        this.totalCount=0;  // 汇总数量清零

        // 先判断商品是否存在于订单列表中
        let isHave=false;  // 先声明状态不存在
        for (let i=0; i<this.tableData.length; i++) {
          if (this.tableData[i].goodsId == goods.goodsId) {
            isHave=true;  // 存在
          }
        }

        // 根据isHave判断订单列表是否已经有此商品(写业务逻辑，有的话增加数量，没有添加到数组中)
        if (isHave) {
          // 存在的话进行数量的添加
          let arr=this.tableData.filter(o=>o.goodsId == goods.goodsId);
          arr[0].count++;
        }else{
          // 不存在的话就推入新的数组
          let newGoods={
            goodsId: goods.goodsId,
            goodsName: goods.goodsName,
            price: goods.price,
            count: 1
          };
          this.tableData.push(newGoods);  // 然后push新的数组给tableData
        }

        this.getAllMoney();  // 进行数量和价格的汇总计算
      },
      delSingleGoods(goods){  // 删除单个商品
        this.tableData=this.tableData.filter(o=>o.goodsId != goods.goodsId);
        this.getAllMoney();  // 进行数量和价格的汇总计算
      },
      delAllGoods(){  // 删除全部商品
        this.tableData=[];  // 数组清空
        this.totalCount=0;
        this.totalMoney=0;
      },
      checkout(){  // 模拟结账
        if (this.totalCount != 0) { // 如果数量不为0的话 清零进行结账
          this.tableData=[];  // 数组清空
          this.totalCount=0;
          this.totalMoney=0;
          this.$message({
            message: '结账成功，感谢您的光顾！',
            type: 'success'
          });
        }else{
          this.$message.error('不好意思，您现在没有选择商品');
        }
      },
      getAllMoney(){  // 汇总数量和金额
        this.totalCount=0;
        this.totalMoney=0;
        if (this.tableData) { // 列表数组有值的时候才会进行汇总
          // 进行数量和价格的汇总计算
          this.tableData.forEach((element)=>{
            this.totalCount+=element.count;
            this.totalMoney=this.totalMoney+(element.price*element.count);
          });
        }
      }
    }
  }
</script>

<style scoped>
  .posOrder{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
  }
  .btn{
    margin-top: 10px;
  }
  .oftenGoodTitle{
    height: 20px;
    line-height: 20px;
    text-align: left;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
  }
  .oftenGoodList ul li{
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    cursor: pointer;
  }
  .oftenGoodListPrice{
    color: #58b7ff;
  }

  .goodsType{
    clear: both;
  }
  .cookList li{
    width:23%;
    border:1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
    cursor: pointer;
  }
  .cookList li span{
    width: 60%;
    text-align: left;
    display: block;
    float:right;
    box-sizing: border-box;
  }
  .cookList li .foodName{
    margin-top: 10px;
  }
  .foodImg{
    width: 40%;
    float: left;
  }
  .foodName{
    font-size: 14px;
    padding-left: 10px;
    color:brown;
  }
  .foodPrice{
    font-size: 12px;
    padding-left: 10px;
    padding-top:10px;
  }

  .total{
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #E5E9F2;
  }
</style>
