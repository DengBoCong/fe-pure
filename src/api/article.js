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