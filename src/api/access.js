import axios from 'axios'

//用户权限 - 通过用户权限查询用户信息
export const getPublicAccessPath = info => {
  return axios.request({
    url: '/access/findPathByAccess',
    method: 'get',
    params: info,
  })
}

//用户权限 - 查询所有用户访问权限信息，默认排序
export const getAllAcessPathOrderBySort = () => {
  return axios.request({
    url: '/access/findAllOrderBySort',
    method: 'get'
  })
}

//用户权限 - 单个插入或更新用户访问权限信息
export const insertAndUpdateAccessPath = info => {
  return axios.request({
    url: '/access/oneInsertUpdate',
    method: 'put',
    data: info,
  })
}

//用户权限 - 批量添加用户访问权限信息
export const insertManyAccessPath = info => {
  return axios.request({
    url: '/access/manyInsert',
    method: 'put',
    data: info,
  })
}

//用户权限 - 单个插入或更新用户访问权限信息
export const deleteOneAccessPath = info => {
  return axios.request({
    url: '/access/deleteOneById',
    method: 'delete',
    params: info,
  })
}