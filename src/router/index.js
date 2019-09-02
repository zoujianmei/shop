import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../page/index'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      component: () => import('../page/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/login/password',
      component: () => import('../page/account/password'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/login/phone',
      component: () => import('../page/account/phonelogin'),
      meta: {
        title: '手机号登录'
      }
    },
    {
      path: '/login/register',
      component: () => import('../page/account/register'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../page/cart/index'),
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../page/category/index'),
      meta: {
        title: '分类'
      }
    },
    {
      path: '/user',
      component: () => import('../page/user/index'),
      name: 'user',
      meta: {
        title: '我的'
      }
    },
  ]
})