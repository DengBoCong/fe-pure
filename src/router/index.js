import Vue from 'vue'
import routes from './routers'
import store from '@/store'
import VueRouter from 'vue-router'

import NProgress from 'nprogress' //引入nprogress
import 'nprogress/nprogress.css' //这个样式必须引入


import { setToken, getToken, canTurnTo, canTurnToControl, setTitle } from 'utils/util'
// import config from '@/config'
import { hasOneOf } from 'utils/tools'
import { getPublicAccessPath } from '@/api/access'
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

const NOACCESS_PAGE_NAME = '401'
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
  if (canTurnToControl(to.name, access)) next(); // 有权限，可访问
  else next({ replace: true, name: PROHIBIT_PAGE_NAME }) // 无权限，重定向到401页面
}


const  ifClose = (value, validList) => {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i].accessPath) {
      if(validList[i].status) return 1;
      else return 0;
    }
  }
  return 3;
}

// var _TheArray = new Array("");

router.beforeEach((to, from, next) => {
  NProgress.start();
  const accessList = getToken("ACCESS_LIST"); //权限列表
  const userToken = getToken("USER_TOKEN"); //权限列表

  // if(!accessList) {
  //   store.dispatch('getPublicAccessPath').then(data => {
  //     //拉取公共访问地址权限，通过用户权限和跳转的页面的path来判断是否有权限访问;access必须是一个数组，如：['/login'] ['/login/sdf', '/df/s']
  //     // turnToControl(to, user.access, next)
  //     // console.log("数据：" + JSON.stringify(data.data));
  //     // console.log(result);
  //     // console.log(to.path);
  //     // store.state.user.hasGetInfo
  //     // turnToControl(to, result, next)
  //   }).catch(() => {
  //     setToken('ACCESS_LIST', '');
  //     next({
  //       name: 'home'
  //     })
  //   })
  // }
  // store.dispatch('getPublicAccessPath').then(data => {
  //   //拉取公共访问地址权限，通过用户权限和跳转的页面的path来判断是否有权限访问;access必须是一个数组，如：['/login'] ['/login/sdf', '/df/s']
  // }).catch(() => {
  //   setToken('ACCESS_LIST', '');
  //   next({
  //     name: 'home'
  //   })
  // })
  getPublicAccessPath({access:"PUBLIC"}).then(res => {
    const data = res.data.data;
    let result = [];
    data.forEach((element, index) => {
      let json = {accessPath:element.accessPath,status:element.status};
      result.push(json);
    });

    let ISCLOSE = ifClose(to.name, result);

    if(ISCLOSE == 0){
      next() // 跳转
    }else if(ISCLOSE == 1) {
      next({
        name: PROHIBIT_PAGE_NAME // 跳转到403
      })
    }else if (!userToken) {
      // 需要权限，未登录，跳转401页面
      next({
        name: NOACCESS_PAGE_NAME // 跳转到401
      })
    } else {
      // 需要权限，已登录，进一步权限验证
      const userAccessList = getToken("USER_ACCESS_LIST"); //用户权限列表
      if(!userAccessList) {
        store.dispatch('getUserAccessPath', {access:JSON.parse(getToken("USER_TOKEN")).access}).then(data => {
          turnToControl(to, getToken("USER_ACCESS_LIST"), next);
        }).catch(() => {
          setToken('USER_ACCESS_LIST', '');
          next({
            name: 'home'
          })
        })
      } else{
        turnToControl(to, userAccessList, next);
      }
      
      next() // 跳转
    }

    // setToken("ACCESS_LIST", result);
  }).catch(err => {
    reject(err)
  })

  // if(!getToken("ACCESS_LIST")) {
  //   console.log("实时");
    
  //   setTimeout(() => {
  //     next({
  //       path: to.path
  //     })
  //   }, 3000);
  // }
  
  // let ISCLOSE = ifClose(to.name, JSON.parse(getToken("ACCESS_LIST")));
  
  // if(ISCLOSE == 0){
  //   next() // 跳转
  // }else if(ISCLOSE == 1) {
  //   next({
  //     name: PROHIBIT_PAGE_NAME // 跳转到403
  //   })
  // }else if (!userToken) {
  //   // 需要权限，未登录，跳转401页面
  //   next({
  //     name: NOACCESS_PAGE_NAME // 跳转到401
  //   })
  // } else {
  //   // 需要权限，已登录，进一步权限验证
  //   const userAccessList = getToken("USER_ACCESS_LIST"); //用户权限列表
  //   if(!userAccessList) {
  //     store.dispatch('getUserAccessPath', {access:JSON.parse(getToken("USER_TOKEN")).access}).then(data => {
  //       turnToControl(to, getToken("USER_ACCESS_LIST"), next);
  //     }).catch(() => {
  //       setToken('USER_ACCESS_LIST', '');
  //       next({
  //         name: 'home'
  //       })
  //     })
  //   } else{
  //     turnToControl(to, userAccessList, next);
  //   }
    
  //   next() // 跳转
  // }
})

router.afterEach(to => {
  NProgress.done();
  setTitle(to, router.app)
  //router.app就相当于templates中的this
  window.scrollTo(0, 0)
})

export default router
