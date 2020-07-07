import {
  login,
  getPublicAccessPath,
} from '@/api/user';
import { setToken, getToken } from 'utils/util'

export default {
  state: {
    accessList: getToken("ACCESS_LIST"),
    userToken: getToken("USER_TOKEN"),
  },
  getters: {
    //
  },
  mutations: {
    setAccessList (state, accessList) {
      state.accessList = accessList;
      let result = [];
      accessList.forEach((element, index) => {
        result.push(element.accessPath);
      });
      setToken("ACCESS_LIST", result)
    },
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { platform, account, password }) {
      account = account.trim()
      password = password.trim();
      return new Promise((resolve, reject) => {
        login({
          platform: platform,
          account: account,
          password: password
        }).then(res => {
          console.log(JSON.stringify(res.data));
          
          // const data = res.data
          // commit('setToken', data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('setToken', '')
          commit('setAccess', [])
          resolve()
        }).catch(err => {
          reject(err)
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    getPublicAccessPath({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getPublicAccessPath({access:"PUBLIC"}).then(res => {
            const data = res.data;
            commit('setAccessList', data.data)
            resolve(data.data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}