import axios from 'axios'
import config from '@/config'

const baseUrl = config.baseUrl.dev


//用户权限 - 通过用户权限查询用户信息
export const getUserRecordByUserId = info => {
  return axios.request({
    url: baseUrl+ '/userRecord/findRecordByUserId',
    method: 'get',
    params: info,
  })
}