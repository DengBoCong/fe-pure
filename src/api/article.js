import axios from 'axios'


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

export const oneInsert = info => {
  return axios.request({
    url: '/article/oneInsert',
    method: 'post',
    data: info,
  })
}

//文章类型接口
export const getArticleType = () => {
  return axios.request({
    url: '/articleType/findType',
    method: 'get'
  })
}

export const setArticleTypeOne = info => {
  return axios.request({
    url: '/articleType/oneInsert',
    method: 'post',
    data: info,
  })
}