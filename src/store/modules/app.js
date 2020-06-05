import {
  setAdminTagNavListInLocalstorage,
  getAdminTagNavListFromLocalstorage,
} from 'utils/util';

export default {
  state: {
    isTipOpen: false,
    currentAdminTag: 'admin',
    adminTagNaveList: [],
  },
  getters: {
    //
  },
  mutations: {
    setTipOpen(state) {
      state.isTipOpen = true;
    },
    setAdminTag(state, list) {
      state.currentAdminTag = list;
    },
    setAdminTagNaveList(state, list) {
      let tagList = []
      if (list) {
        tagList = [...list]
      } else tagList = getAdminTagNavListFromLocalstorage() || []
      // if (tagList[0] && tagList[0].name !== homeName) tagList.shift()
      // let homeTagIndex = tagList.findIndex(item => item.name === homeName)
      // if (homeTagIndex > 0) {
      //   let homeTag = tagList.splice(homeTagIndex, 1)[0]
      //   tagList.unshift(homeTag)
      // }
      state.tagNavList = tagList
      setAdminTagNavListInLocalstorage([...tagList])
    }
  },
  actions: {
    //
  }
}