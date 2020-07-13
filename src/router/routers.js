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
        name: 'home',
        component: () => import('views/MainTabPane'),
        meta: {
          title: '首页',
          hideInMenu: true,
          notCache: true,
        },
      }, {
        path: '/article/:id',
        name: 'articleId',
        component: () => import('views/ContentDetail'),
        meta: {
          title: '博客',
          hideInMenu: true,
        },
      }, {
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

  // **************************搜索***************************************
  // **************************相关***************************************
  {
    path: '/search',
    name: 'search',
    meta: {
      title: '搜索',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/Search'),
    children: [],
  },

  // **************************登录***************************************
  // **************************相关***************************************
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


  // **************************状态码***************************************
  // **************************相关***************************************
  {
    path: '/401',
    name: '401',
    meta: {
      title: '无权访问',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/code/401')
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '无权访问',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/code/403')
  },

  // **************************wiki系统***************************************
  // **************************系统***************************************
  {
    path: '/wiki',
    name: 'wiki',
    meta: {
      title: 'WiKi',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/wiki/Home'),
    children: [],
  },

  // **************************开源***************************************
  // **************************项目***************************************
  {
    path: '/project',
    name: 'project',
    meta: {
      title: '项目',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/project/Home'),
    children: [],
  },

  // **************************API***************************************
  // **************************文档***************************************
  {
    path: '/document',
    meta: {
      title: '文档',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/document/Home'),
    children: [{
      path: '/',
      name: 'document',
      component: () => import('views/document/Main'),
      meta: {
        title: '文档',
        hideInMenu: true,
        notCache: true,
      },
    },{
      path: '/document/:id',
      name: 'documentId',
      component: () => import('views/document/Document'),
      meta: {
        title: '文档',
        hideInMenu: true,
        notCache: true,
      },
    }],
  },

  // **************************关于***************************************
  {
    path: '/explain',
    name: 'explain',
    meta: {
      title: '吐槽说明',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/about/Explain'),
    children: [],
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      title: '文字版简历',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/about/Record'),
    children: [],
  },
  {
    path: '/advrecord',
    name: 'advrecord',
    meta: {
      title: '炫酷版简历',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/about/AdvanceRecord'),
    children: [],
  },
  {
    path: '/summary',
    name: 'summary',
    meta: {
      title: '诗和远方',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/about/Summary'),
    children: [],
  },

  // **************************提交***************************************
  // **************************工单***************************************
  {
    path: '/workorder',
    name: 'workorder',
    meta: {
      title: '工单',
      hideInMenu: true,
      notCache: true,
    },
    component: () => import('views/WorkOrder'),
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
    }, {
      path: '/admin/person',
      name: 'adminPerson',
      meta: {
        hideInMenu: true,
        title: '个人中心',
        notCache: true,
      },
      component: () => import('views/admin/Person'),
    },{
      path: '/admin/technique/blog',
      name: 'adminTechniqueBlog',
      meta: {
        hideInMenu: true,
        title: '我的博客',
        notCache: true,
        // icon: 'el-icon-position'
      },
      component: () => import('views/admin/blog/Blog'),
    }, {
      path: '/admin/technique/editblog',
      name: 'adminTechniqueEditblog',
      meta: {
        hideInMenu: true,
        title: '编辑博客',
        notCache: true,
        // icon: 'el-icon-position'
      },
      component: () => import('views/admin/blog/EditBlog'),
    }, {
      path: '/admin/technique/aboutblog',
      name: 'adminTechniqueAboutblog',
      meta: {
        hideInMenu: true,
        title: '博客相关',
        notCache: true,
        // icon: 'el-icon-position'
      },
      component: () => import('views/admin/blog/AboutBlog'),
    }, {
      path: '/admin/about/record',
      name: 'adminAboutRecord',
      meta: {
        hideInMenu: true,
        title: '个人履历',
        notCache: true,
        // icon: 'el-icon-position'
      },
      component: () => import('views/admin/about/Record'),
    }],
  }
]