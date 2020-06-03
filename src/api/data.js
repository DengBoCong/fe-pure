import axios from 'axios'


export const getTableData = () => {
  return axios.request({
    url: 'hello',
    method: 'get'
  })
}