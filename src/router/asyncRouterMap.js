const Layout = resolve => require(['../views/Layout/index.vue'], resolve);
// 异步路由， 受权限控制
const asyncRouterMap = [
  // 页面1
  {
    path: '/page1',
    meta: {
      name: '页面1'
    },
    component: resolve => require(['../views/Page1/index.vue'], resolve),
    children: [{
      path: 'page1-1',
      meta: {
        name: '页面1-1'
      },
      component: resolve => require(['../views/Page1/page1-1.vue'], resolve),
    }]
  },
  // 页面2
  {
    path: '/page2',
    meta: {
      name: '页面2'
    },
    redirect: '/page2/page2-1',
    component: resolve => require(['../views/Page2/index.vue'], resolve),
    children: [{
      path: 'page2-1',
      meta: {
        name: '页面2-1'
      },
      component: resolve => require(['../views/Page2/page2-1.vue'], resolve),
    }, {
      path: 'page2-2',
      meta: {
        name: '页面2-2'
      },
      component: resolve => require(['../views/Page2/page2-1.vue'], resolve),
    }]
  },
  // 页面3
  {
    path: '/page3',
    meta: {
      name: '页面3'
    },
    component: resolve => require(['../views/Page1/index.vue'], resolve)
  },
  // 其它路由
  {
    path: '*', component: resolve => require(['../views/404.vue'], resolve)
  }
];

export default asyncRouterMap;
