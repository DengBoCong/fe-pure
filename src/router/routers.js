import Main from '@/App'
export default [
  //首页相关路由组件
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        hideInMenu: true,
        title: '',
        notCache: true,
        // icon: 'el-icon-position'
      },
      component: () => import('views/Home'),
      children: [{
        path: '/',
        name: 'main',
        component: () => import('views/MainTabPane'),
        meta: {
          title: '首页',
          hideInMenu: true,
          notCache: true,
        },
      },{
        path: '/article/:id',
        name: 'article',
        component: () => import('views/ContentDetail'),
        meta: {
          title: '博客',
          hideInMenu: true,
        },
      },{
        path: '/interfile',
        name: 'interfile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('views/Interfile.vue'),
        meta: {
          title: '技术中心-归档',
          hideInMenu: true,
        },
      }]
    }],
  },


  //登录相关
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true,
      notCache: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ 'views/Login')
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '无权访问',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/403')
  },

// **************************后台***************************************
// **************************相关***************************************
  //后台首页
  {
    path: '/admin',
    name: 'admin',
    meta: {
      title: '后台首页',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/admin/Home')
  }
]