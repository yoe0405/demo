import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import oppoR11 from '@/page/activity/oppoR11/oppoR11'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {
        title: '哈哈哈'
      },
      component: Hello
    },{
      path: '/oppoR11',
      name: 'oppoR11',
      meta: {
        title: 'oppoR11限量首发'
      },
      component: oppoR11
    }
  ]
})
