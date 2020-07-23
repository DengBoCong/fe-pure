import axios from 'axios'

//系统消息 - 通过通告的类型标记查询通告的信息
export const getNoticeMessageTypeOne = info => {
  return axios.request({
    url: '/message/findNoticeByType',
    method: 'get',
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