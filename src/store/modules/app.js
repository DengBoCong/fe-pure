import {
  setAdminTagNavListInLocalstorage,
  getAdminTagNavListFromLocalstorage,
  setAdminCurTagInLocalstorage,
  getAdminCurTagFromLocalstorage,
  localRead,
  localSave,
} from 'utils/util';

export default {
  state: {
    isTipOpen: false,
    currentAdminTag: '',//后台管理当前标签
    adminTagNaveList: [],//后台管理标签
    local: localRead('localLang'),//语言
  },
  getters: {
    getAdminTagNaveList: state => {
      return getAdminTagNavListFromLocalstorage();
    },
    getAdminCurTag: state => {
      return getAdminCurTagFromLocalstorage();
    },
    getLocal: state => {
      return state.local;
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
      setAdminCurTagInLocalstorage(tag);
    },
    setLocal (state, lang) {//设置语言
      localSave('localLang', lang);
      state.local = lang;
    },
  },
  actions: {
    //
  }
}