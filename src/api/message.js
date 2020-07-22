import axios from 'axios'

//系统消息 - 通过通告的类型标记查询通告的信息
export const getNoticeMessageTypeOne = info => {
  return axios.request({
    url: '/message/findNoticeByType',
    method: 'get',
    params: info,
  })
}