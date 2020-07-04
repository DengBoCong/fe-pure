import axios from 'axios'

//用户权限 - 通过用户权限查询用户信息
export const getUserByAccess = info => {
  return axios.request({
    url: '/user/findByAccess',
    method: 'get',
    params: info,
  })
}