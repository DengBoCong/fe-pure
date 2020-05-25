import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    //首页相关路由组件
  {
    path: '/',
    name: 'home',
    component: () => import('views/Home'),
    meta: {
      title: 'Pure - 首页',
      hideInMenu: true,
    },
    children: [{
      path: '/',
      name: 'main',
      component: () => import('views/MainTabPane'),
      meta: {
        title: 'Pure - 首页',
        hideInMenu: true,
      },
    },{
      path: '/article/:id',
      name: 'article',
      component: () => import('views/ContentDetail'),
      meta: {
        title: 'Pure - 博客',
        hideInMenu: true,
      },
    },{
      path: '/interfile',
      name: 'Interfile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('views/Interfile.vue'),
      meta: {
        title: 'Pure - 技术中心-归档',
        hideInMenu: true,
      },
    },],
  },


  //技术中心-归档
  
  // {
  //   path: '/article/:id', component: 
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
