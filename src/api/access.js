import axios from 'axios'

//用户权限 - 通过用户权限查询用户信息
export const getPublicAccessPath = info => {
  return axios.request({
    url: '/access/findPathByAccess',
    method: 'get',
    params: info,
  })
}

export const getAllAcessPathOrderBySort = () => {
  return axios.request({
    url: '/access/findAllOrderBySort',
    method: 'get'
  })
}