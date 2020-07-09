import {
  login,
  getPublicAccessPath,
} from '@/api/user';
import { setToken, getToken } from 'utils/util'

export default {
  state: {
    accessList: getToken("ACCESS_LIST"),
    userToken: getToken("USER_TOKEN"),
    userAccessList: getToken("USER_ACCESS_LIST"),
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
      setToken("ACCESS_LIST", result);
    },
    setUserToken (state, userToken) {
      state.userToken = userToken;
      setToken("USER_TOKEN", userToken);
    },
    setUserAccessList(state, userAccessList) {
      state.userAccessList = userAccessList;
      let result = [];
      userAccessList.forEach((element, index) => {
        result.push(element.accessPath);
      });
      setToken("USER_ACCESS_LIST", result);
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { platform, account, password }) {
      return new Promise((resolve, reject) => {
        login({
          platform: platform,
          account: account,
          password: password
        }).then(res => {
          commit('setUserToken', res.data.data)
          resolve(res.data)
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
    },
    getUserAccessPath({ state, commit }, { access }) {
      return new Promise((resolve, reject) => {
        try {
          getPublicAccessPath({access:access}).then(res => {
            const data = res.data;
            commit('setUserAccessList', data.data);
            resolve(data.data);
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