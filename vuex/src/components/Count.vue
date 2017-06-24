<template>
  <div>
    <h2>{{msg}}</h2><hr>
    <h3>{{$store.state.count}}--{{count}}</h3> 
    <h3>{{$store.state.a.count}} --- {{count}}</h3>
    <p>
      <button @click="$store.commit('add',20)">加</button>
      <button @click="reduce">减</button>
    </p>

    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'; // 方法二使用mapState
  export default{
    data(){
      return{
        msg: 'hello vuex'
      }
    },
    /*computed:{ // 方法一
      count(){
        return this.$store.state.count;
      }
    },*/
    /*
    computed:mapState({ // 方法二使用mapState
      count:state=>state.count  // es6的写法
      count:function(state){  // es5的写法
        return state.count;
      }
    }),*/
    //computed:mapState(['count']),  // 方法三数组的方式使用mapState

    computed:{
      // ...mapState(['count']),
      /*
      count(){
        return this.$store.getters.count;
      }*/
      // ...mapGetters(['count'])
 
      // 模块组的声明方法 (不建议使用，项目不是特别大，不直观，坑比较多)
      count(){
        return this.$store.state.a.count;
      }

    },

    // methods:mapMutations(['add','reduce']),  // 简化传值
    
    methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
    },
    store
  }
</script>
