import Vue from 'vue'
import routes from './routers'
import store from '@/store'
import VueRouter from 'vue-router'

import NProgress from 'nprogress' //引入nprogress
import 'nprogress/nprogress.css' //这个样式必须引入


import { setToken, getToken, canTurnTo, canTurnToControl, setTitle } from 'utils/util'
// import config from '@/config'
import { hasOneOf } from 'utils/tools'
// const { homeName } = config

Vue.use(VueRouter)

// 简单配置
NProgress.inc(0.4)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const NOACCESS_PAGE_NAME = '403'
const PROHIBIT_PAGE_NAME = '403'

// 解决跳转同一地址出错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const turnTo = (to, access, next) => { //固定型跳转
  if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
  else next({ replace: true, name: PROHIBIT_PAGE_NAME }) // 无权限，重定向到401页面
}

const turnToControl = (to, access, next) => { //可控型跳转
  if (canTurnToControl(to.path, access)) next() // 有权限，可访问
  else next({ replace: true, name: PROHIBIT_PAGE_NAME }) // 无权限，重定向到401页面
}

// var _TheArray = new Array("");

router.beforeEach((to, from, next) => {
  NProgress.start();
  const accessList = getToken("ACCESS_LIST"); //权限列表
  const userToken = getToken("USER_TOKEN"); //权限列表

  if(!accessList) {
    store.dispatch('getPublicAccessPath').then(data => {
      //拉取公共访问地址权限，通过用户权限和跳转的页面的path来判断是否有权限访问;access必须是一个数组，如：['/login'] ['/login/sdf', '/df/s']
      // turnToControl(to, user.access, next)
      // console.log("数据：" + JSON.stringify(data.data));
      // console.log(result);
      // console.log(to.path);
      // store.state.user.hasGetInfo
      // turnToControl(to, result, next)
    }).catch(() => {
      setToken('')
      next({
        name: 'login'
      })
    })
  }
  if(hasOneOf(JSON.parse(getToken("ACCESS_LIST")), new Array(to.path))){
    next() // 跳转
  }else if (!userToken) {
    // 需要权限，未登录，跳转403页面
    next({
      name: NOACCESS_PAGE_NAME // 跳转到403
    })
  } else {
    next() // 跳转
    // 需要权限，已登录，进一步权限验证
    // if (store.state.user.hasGetInfo) {
    //   turnTo(to, store.state.user.access, next)
    // } else {
    //   store.dispatch('getUserInfo').then(user => {
        // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
      //   turnTo(to, user.access, next)
      // }).catch(() => {
      //   setToken('')
      //   next({
      //     name: 'login'
      //   })
      // })
    // }
  }
})

router.afterEach(to => {
  NProgress.done();
  setTitle(to, router.app)
//   iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
