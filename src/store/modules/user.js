import {
  getPublicAccessPath,
} from '@/api/user';
import { setToken, getToken } from 'utils/util'

export default {
  state: {
    accessList: getToken("ACCESS_LIST"),
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