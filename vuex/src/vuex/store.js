/**
 * Created by yoe on 2017/6/24.
 */


import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// state访问状态对象
const state={
  count: 10
};

// Mutations修改状态
const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state){
    state.count--;
  }
};

// getters计算过滤操作
const getters={
	count:function(state){
		return state.count+=10;
	}
};

// actions异步修改状态
const actions={
	addAction(context){
		context.commit('add',10);
		setTimeout(()=>{context.commit('reduce')},5000);
		console.log('哈哈哈');
	},
	reduceAction({commit}){
		commit('reduce');
	}
};

// module模块组
const moduleA={
	state,mutations,getters,actions
}

export default new Vuex.Store({
  modules:{a:moduleA}
})

