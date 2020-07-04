import axios from 'axios'

//用户权限 - 通过用户权限查询用户信息
export const getUserRecordByUserId = info => {
  return axios.request({
    url: '/userRecord/findRecordByUserId',
    method: 'get',
    params: info,
  })
}