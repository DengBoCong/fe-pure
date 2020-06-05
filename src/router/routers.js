import Main from '@/App'
export default [
  //首页相关路由组件
  //当有子路由的时候，父路由不应该有name属性
  {
    path: '/',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [{
      path: '/home',
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

  // **************************wiki系统***************************************
// **************************系统***************************************
  {
    path: '/wiki',
    meta: {
      title: 'WiKi',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/wiki/Home'),
    children: [],
  },


// **************************后台***************************************
// **************************相关***************************************
  //后台首页
  {
    path: '/admin',
    meta: {
      title: '后台首页',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/admin/Home'),
    children: [{
      path: '/',
      name: 'admin',
      meta: {
        hideInMenu: true,
        title: '',
        notCache: true,
        // icon: 'el-icon-position'
      },
      component: () => import('views/admin/Main')
    },{
      path: '/admin/technique/blog',
      name: 'adminblog',
      meta: {
        hideInMenu: true,
        title: '',
        notCache: true,
        // icon: 'el-icon-position'
      },
      component: () => import('views/admin/blog/Blog'),
    },{
      path: '/admin/technique/blog/editbolg',
      name: 'admineditblog',
      meta: {
        hideInMenu: true,
        title: '',
        notCache: true,
        // icon: 'el-icon-position'
      },
      component: () => import('views/admin/blog/EditBlog'),
    }],
  }
]