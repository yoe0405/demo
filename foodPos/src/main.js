// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'  // 引入element-ui的ui组建
import 'element-ui/lib/theme-default/index.css'  // 引入element-ui组建的css样式

Vue.config.productionTip = false
Vue.use(ElementUI);  // 定义全局可以用ElementUI组建

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
