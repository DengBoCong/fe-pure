import axios from 'axios'

//测试接口
export const getUserByAccess = info => {
  return axios.request({
    url: '/user/findByAccess',
    method: 'get',
    params: info,
  })
}