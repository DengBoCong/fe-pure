import axios from 'axios'

//测试接口
export const getTableData = () => {
  return axios.request({
    url: '/hello',
    method: 'get'
  })
}

export const insert = info => {
  return axios.request({
    url: '/insert',
    method: 'post',
    params: info,
  })
}


//文章接口 - 单个插入接口
export const oneInsert = info => {
  return axios.request({
    url: '/article/oneInsert',
    method: 'post',
    data: info,
  })
}

//文章接口 - 根据typeId进行查询，即分类查询文章
export const getArticleByTypeId = info => {
  return axios.request({
    url: '/article/findArticleByTypeId',
    method: 'post',
    params: info,
  })
}


//文章类型接口 - 查询所有接口
export const getArticleType = () => {
  return axios.request({
    url: '/articleType/findType',
    method: 'get'
  })
}

//文章类型接口 - 查询指定status状态的文章类型
export const getArticleTypeByStatus = info => {
  return axios.request({
    url: '/articleType/findTypeByStatus',
    method: 'post',
    params: info,
  })
}

//文章类型接口 - 单个查询接口
export const getArticleTypeById = info => {
  return axios.request({
    url: '/articleType/findTypeById',
    method: 'post',
    params: info,
  })
}

//文章类型接口 - 单个插入接口
export const setArticleTypeOne = info => {
  return axios.request({
    url: '/articleType/oneInsertAndUpdate',
    method: 'post',
    data: info,
  })
}

//文章类型接口 - 单个删除接口
export const deleteArticleTypeOne = info => {
  return axios.request({
    url: '/articleType/oneDelete',
    method: 'post',
    params: info,
  })
}