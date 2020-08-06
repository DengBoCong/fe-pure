import axios from 'axios'
import config from '@/config'

const baseUrl = config.baseUrl.dev


//系统通告 - 通过通告的类型标记查询通告的信息
export const getNoticeMessageTypeOne = info => {
  return axios.request({
    url: baseUrl+ '/message/findNoticeByType',
    method: 'get',
    params: info,
  })
}

//系统通告 - 查询所有的通告，默认他通过类型标记排序
export const getAllNoticeMessage = () => {
  return axios.request({
    url: baseUrl+ '/message/findAllNotice',
    method: 'get',
  })
}

//系统通告 - 针对单个实体添加或者更新
export const addOrUpdateOneNoticeMessage = info => {
  return axios.request({
    url: baseUrl+ '/message/addAndUpdateOneNotice',
    method: 'put',
    data: info,
  })
}

//系统通告 - 通过id删除单个通告
export const deleteOneNoticeMessage = info => {
  return axios.request({
    url: baseUrl+ '/message/deleteOneNoticeById',
    method: 'delete',
    params: info,
  })
}

//系统广告 - 通过广告的类型标记查询广告的信息
export const getAdvertiseTypeOne = info => {
  return axios.request({
    url: baseUrl+ '/message/findAdvertiseByType',
    method: 'get',
    params: info,
  })
}

//系统广告 - 查询所有的广告，默认通过类型标记排序
export const getAllAdvertiseMessage = () => {
  return axios.request({
    url: baseUrl+ '/message/findAllAdvertise',
    method: 'get',
  })
}

//系统广告 - 针对单个实体添加或者更新
export const addOrUpdateOneAdvertiseMessage = info => {
  return axios.request({
    url: baseUrl+ '/message/addAndUpdateOneAdvertise',
    method: 'put',
    data: info,
  })
}

//系统广告 - 通过id删除单个广告
export const deleteOneAdvertiseMessage = info => {
  return axios.request({
    url: baseUrl+ '/message/deleteOneAdvertiseById',
    method: 'delete',
    params: info,
  })
}