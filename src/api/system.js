import axios from 'axios'

//系统广告 - 查询所有的广告，默认通过类型标记排序
export const getAllLanguage = () => {
  return axios.request({
    url: '/system/findAllLanguage',
    method: 'get',
  })
}

//系统广告 - 通过id删除单个广告
export const deleteOneLanguage = info => {
  return axios.request({
    url: '/system/deleteById',
    method: 'delete',
    params: info,
  })
}

//系统广告 - 针对单个实体添加或者更新
export const addOrUpdateOneLanguage = info => {
  return axios.request({
    url: '/system/addAndUpdateOne',
    method: 'put',
    data: info,
  })
}