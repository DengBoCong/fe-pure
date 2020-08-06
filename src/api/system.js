import axios from 'axios'
import config from '@/config'

const baseUrl = config.baseUrl.dev


//系统广告 - 查询所有的广告，默认通过类型标记排序
export const getAllLanguage = () => {
  return axios.request({
    url: baseUrl+ '/system/findAllLanguage',
    method: 'get',
  })
}

//系统广告 - 通过id删除单个广告
export const deleteOneLanguage = info => {
  return axios.request({
    url: baseUrl+ '/system/deleteById',
    method: 'delete',
    params: info,
  })
}

//系统广告 - 针对单个实体添加或者更新
export const addOrUpdateOneLanguage = info => {
  return axios.request({
    url: baseUrl+ '/system/addAndUpdateOne',
    method: 'put',
    data: info,
  })
}