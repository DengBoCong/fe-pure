import axios from 'axios'
import config from '@/config'

const baseUrl = config.baseUrl.dev

//测试接口
export const getTableData = () => {
  return axios.request({
    url: baseUrl+ '/hello',
    method: 'get'
  })
}

export const insert = info => {
  return axios.request({
    url: baseUrl+ '/insert',
    method: 'post',
    params: info,
  })
}


//文章接口 - 单个插入接口
export const oneInsert = info => {
  return axios.request({
    url: baseUrl+ '/article/oneInsert',
    method: 'put',
    data: info,
  })
}

//文章接口 - 根据ArticleId进行查询
export const getArticleByArticleId = info => {
  return axios.request({
    url: baseUrl+ '/article/findByArticleId',
    method: 'get',
    params: info,
  })
}

//文章接口 - 根据typeId进行查询，即分类查询文章
export const getArticleByTypeId = info => {
  return axios.request({
    url: baseUrl+ '/article/findArticleByTypeId',
    method: 'post',
    params: info,
  })
}


//文章类型接口 - 查询所有接口
export const getArticleType = () => {
  return axios.request({
    url: baseUrl+ '/articleType/findType',
    method: 'get'
  })
}

//文章类型接口 - 查询指定status状态的文章类型
export const getArticleTypeByStatus = info => {
  return axios.request({
    url: baseUrl+ '/articleType/findTypeByStatus',
    method: 'post',
    params: info,
  })
}

//文章类型接口 - 单个查询接口
export const getArticleTypeById = info => {
  return axios.request({
    url: baseUrl+ '/articleType/findTypeById',
    method: 'post',
    params: info,
  })
}

//文章类型接口 - 单个插入接口
export const setArticleTypeOne = info => {
  return axios.request({
    url: baseUrl+ '/articleType/oneInsertAndUpdate',
    method: 'put',
    data: info,
  })
}

//文章类型接口 - 单个删除接口
export const deleteArticleTypeOne = info => {
  return axios.request({
    url: baseUrl+ '/articleType/oneDelete',
    method: 'delete',
    params: info,
  })
}