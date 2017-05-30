// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'  // 引入vue
import App from './App'  // 引入App.vue
import router from './router'  // 引入路由

Vue.config.productionTip = false  // 生产环境提示，这里设置了false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }  // 模版中使用App.vue组件
})
