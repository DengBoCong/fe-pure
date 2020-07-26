import axios from 'axios'

//系统通告 - 通过通告的类型标记查询通告的信息
export const getNoticeMessageTypeOne = info => {
  return axios.request({
    url: '/message/findNoticeByType',
    method: 'get',
    params: info,
  })
}

//系统通告 - 查询所有的通告，默认他通过类型标记排序
export const getAllNoticeMessage = info => {
  return axios.request({
    url: '/message/findAllNotice',
    method: 'get',
    params: info,
  })
}

//系统通告 - 针对单个实体添加或者更新
export const addOrUpdateOneNoticeMessage = info => {
  return axios.request({
    url: '/message/addAndUpdateOneNotice',
    method: 'put',
    data: info,
  })
}

//系统通告 - 通过id删除单个通告
export const deleteOneNoticeMessage = info => {
  return axios.request({
    url: '/message/deleteOneNoticeById',
    method: 'delete',
    params: info,
  })
}

//系统广告 - 通过广告的类型标记查询广告的信息
export const getAdvertiseTypeOne = info => {
  return axios.request({
    url: '/message/findAdvertiseByType',
    method: 'get',
    params: info,
  })
}