import HttpRequest from 'utils/axios'
import config from '@/config'
// console.log("哈哈哈："+process.env.NODE_ENV)
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios