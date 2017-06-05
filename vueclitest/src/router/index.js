import Vue from 'vue'  // 引入Vue
import Router from 'vue-router'  // 引入vue-router路由插件
import Hello from '@/components/Hello'  // 引入根目录下的Hello.vue组件
// import Hi from '@/components/Hi'
// import Hi1 from '@/components/Hi1'
// import Hi2 from '@/components/Hi2'

// import Hello1 from '@/components/Hello1'
// import Hello2 from '@/components/Hello2'

import Params from '@/components/Params'







Vue.use(Router)  // Vue全局使用Router


// 案例1
// export default new Router({
//   mode: 'history',  // 去掉链接后面的#
//   routes: [  // 配置路由，这里是个数组
//     {  // 每一个链接都是一个对象
//       path: '/',  // 链接的路径
//       name: 'Hello',  // 路由的名称
//       component: Hello  // 对应的组件模版
//     },
//     {  // 当有子页面的时候，name需要在子页面里面设置
//       path: '/hi',
//       component: Hi,
//       children: [
//       	{path: '/',name: 'Hello/Hi',component: Hi},
//       	{path: 'hi1',name: 'hi1',component: Hi1},
//       	{path: 'hi2',name: 'hi2',component: Hi2}
//       ]
//     }
//   ]
// })


// 案例2
// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       components: {
//         default: Hello,
//         left: Hello1,
//         right: Hello2
//       }
//     },
//     {
//       path: '/yoe',
//       name: 'Hello',
//       components: {
//         default: Hello,
//         left: Hello2,
//         right: Hello1
//       }
//     }
//   ]
// })

// 案例3 vue-router 的重定向-redirect定向新的跳转链接
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params      
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }
  ]
})

