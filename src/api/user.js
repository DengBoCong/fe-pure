import axios from 'axios'

//用户权限 - 通过用户权限查询用户信息
export const getPublicAccessPath = info => {
  return axios.request({
    url: '/user/findPathByAccess',
    method: 'get',
    params: info,
  })
}

//用户信息 - 直接查询超级管理员账户信息
export const getSuperInfo = info => {
  return axios.request({
    url: '/user/findSuper',
    method: 'get',
  })
}
