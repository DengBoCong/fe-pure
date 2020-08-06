import axios from 'axios'
import config from '@/config'

const baseUrl = config.baseUrl.dev

//用户登录
export const login = info => {
  return axios.request({
    url: baseUrl+ '/user/login',
    method: 'post',
    data: info,
  })
}

//用户权限 - 通过用户权限等级检查用户是否有权限访问
export const getCheckAccess = info => {
  return axios.request({
    url: baseUrl+ '/user/checkAccess',
    method: 'post',
    params: info,
  })
}

//用户信息 - 直接查询超级管理员账户信息
export const getSuperInfo = info => {
  return axios.request({
    url: baseUrl+ '/user/findSuper',
    method: 'get',
  })
}
