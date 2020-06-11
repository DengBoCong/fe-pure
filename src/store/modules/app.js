import {
  setAdminTagNavListInLocalstorage,
  getAdminTagNavListFromLocalstorage,
  setAdminCurTagInLocalstorage,
  getAdminCurTagFromLocalstorage,
} from 'utils/util';

export default {
  state: {
    isTipOpen: false,
    currentAdminTag: '',
    adminTagNaveList: [],
  },
  getters: {
    getAdminTagNaveList: state => {
      return getAdminTagNavListFromLocalstorage();
    },
    getAdminCurTag: state => {
      return getAdminCurTagFromLocalstorage();
    },
  },
  mutations: {
    setTipOpen(state) {
      state.isTipOpen = true;
    },
    setAdminTag(state, list) {
      state.currentAdminTag = list;
    },
    setAdminTagNaveList(state, list) {
      // let tagList = [];
      // tagList.list = list;
      // tagList.tag = "value";
      // tagList = [...list]
      // console.log("tagList:"+list);
      // if (list) {
      //   tagList = [...list]
      //   console.log("tagList:"+tagList);
      // } else tagList = getAdminTagNavListFromLocalstorage() || []
      // if (tagList[0] && tagList[0].name !== homeName) tagList.shift()
      // let homeTagIndex = tagList.findIndex(item => item.name === homeName)
      // if (homeTagIndex > 0) {
      //   let homeTag = tagList.splice(homeTagIndex, 1)[0]
      //   tagList.unshift(homeTag)
      // }
      // state.tagNavList = list;
      setAdminTagNavListInLocalstorage([...list])
    },
    setAdminCurTag(state, tag) {
      console.log(tag);
      
      setAdminCurTagInLocalstorage(tag);
    }
  },
  actions: {
    //
  }
}