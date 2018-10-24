import Vue from 'vue'
import Router from 'vue-router'
// 固定路由不受权限控制
import includeRouterMap from './includeRouterMap'
// 异步路由，受权限控制
import asyncRouterMap from './asyncRouterMap'

Vue.use(Router);

const router = new Router({
  routes: includeRouterMap.concat(asyncRouterMap)
});

export default router
