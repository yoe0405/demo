// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './common/css/reset.less'  // 重置css
import rem from './common/js/rem'  // rem
// import axios from 'axios'


Vue.use(rem)
Vue.use(require('vue-wechat-title'))  // 设置页面title
// Vue.prototype.$http= axios

// axios.defaults.withCredentials=true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
