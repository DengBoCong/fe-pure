<template>
  <el-container class="size">
    <div :style="height">
      <el-scrollbar style="width:100%;height:100%;">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :style="height"
          @open="handleOpen" 
          @close="handleClose" 
          @select="addTab"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse">
          <el-menu-item index="2">
            <i class="el-icon-position"></i>
            <span slot="title">DengBoCong</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">技术中心</span>
            </template>
            <el-menu-item index="admin/technique/blog">博客</el-menu-item>
            <el-menu-item index="1-2">技术学习</el-menu-item>
            <el-menu-item index="1-3">资源列表</el-menu-item>
            <el-menu-item index="1-4">API文档</el-menu-item>
            <el-menu-item index="1-5">归档</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">项目中心</span>
            </template>
            <el-menu-item index="2-1">wiki</el-menu-item>
            <el-menu-item index="2-2">开源项目</el-menu-item>
            <el-menu-item index="2-3">入口3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">关于</span>
            </template>
            <el-menu-item index="3-1">吐槽说明</el-menu-item>
            <el-menu-item index="3-2">个人履历</el-menu-item>
            <el-menu-item index="3-3">我的标签</el-menu-item>
            <el-menu-item index="3-4">生活和爱情</el-menu-item>
            <el-menu-item index="3-5">兴趣和爱好</el-menu-item>
            <el-menu-item index="3-6">创业那些事儿</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">工作台</span>
            </template>
            <el-menu-item index="4-1">工单处理</el-menu-item>
            <el-menu-item index="4-2">账号空间</el-menu-item>
            <el-menu-item index="4-3">后台管理</el-menu-item>
            <el-menu-item index="4-4">六小六系统</el-menu-item>
            <el-menu-item index="4-5">中心系统</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
    </div>
    <el-container>
      <el-header style="padding:0;">
        <el-container class="header-border border-bottom"><!-- background:#000000; -->
          <el-container>
            <el-button type="text" :icon="buttonIcon" size="medium" style="margin-top:10px;margin-left:17px;" @click="open"></el-button>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top:25px;margin-left:17px;" class="font-size-all">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-container>
          <el-card style="width:50%;border:0;" shadow="never">
            <el-dropdown class="header-float">
              <span class="el-dropdown-link">
                <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @error="true" style="margin-top:-11px;">
                  <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                </el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>消息中心</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="header-float">
              <span class="el-dropdown-link">
                语言<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>中文简体</el-dropdown-item>
                <el-dropdown-item>中文繁体</el-dropdown-item>
                <el-dropdown-item>English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <i class="el-icon-odometer header-float"></i>
            <i class="el-icon-full-screen header-float" @click="getFullCreeen"></i>
          </el-card>
        </el-container>
      </el-header>
      <el-main style="padding:0;">
        <el-tabs v-model="editableTabsValue" type="card" @tab-click="clickTab" @tab-remove="removeTab"><!-- -->
          <!-- <el-tab-pane
            key="1"
            label="工作台"
            name="1">
            <el-card shadow="never" :body-style="{ padding: '50px' }">
              <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @error="true" style="float:left;margin-top:-15px;">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
              </el-avatar>
              <div style="padding: 14px;float:left;">
                <span>早安，Serati Ma，祝你开心每一天！</span>
                <div class="bottom clearfix">
                  <el-button type="text" plain>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</el-button>
                </div>
              </div>
              <div style="padding: 14px;float:right;">
                <span>项目数</span>
                <span>1000</span>
                <el-divider direction="vertical"></el-divider>
                <span>博客数</span>
                <el-divider direction="vertical"></el-divider>
                <span>用户数</span>
                <el-divider direction="vertical"></el-divider>
                <span>网站访问</span>
              </div>
            </el-card>
            <el-row :gutter="0">
              <el-col :span="16">
                <el-card shadow="never" style="margin-top:10px;">
                  <div slot="header" class="clearfix">
                    <span>正在进行的任务排程</span>
                    <el-button style="float: right; padding: 3px 0" type="text">全部项目</el-button>
                  </div>
                  <el-row :gutter="10">
                    <el-col :span="8">
                      <el-card shadow="hover">
                        <div style="background:#000000;">
                          <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                          </el-avatar>
                          <div style="padding: 5px;float:left;">
                            <span>AliPay</span>
                          </div>
                        </div></br>
                        <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
                        <div style="margin-top:15px;font-size:13px;color:#969696;">
                          <span>科学搬砖</span>
                          <span style="float:right;">2天前</span>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card shadow="hover">
                        <div style="background:#000000;">
                          <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                          </el-avatar>
                          <div style="padding: 5px;float:left;">
                            <span>AliPay</span>
                          </div>
                        </div></br>
                        <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
                        <div style="margin-top:15px;font-size:13px;color:#969696;">
                          <span>科学搬砖</span>
                          <span style="float:right;">2天前</span>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card shadow="hover">
                        <div style="background:#000000;">
                          <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                          </el-avatar>
                          <div style="padding: 5px;float:left;">
                            <span>AliPay</span>
                          </div>
                        </div></br>
                        <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
                        <div style="margin-top:15px;font-size:13px;color:#969696;">
                          <span>科学搬砖</span>
                          <span style="float:right;">2天前</span>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="8">
                      <el-card shadow="hover">
                        <div style="background:#000000;">
                          <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                          </el-avatar>
                          <div style="padding: 5px;float:left;">
                            <span>AliPay</span>
                          </div>
                        </div></br>
                        <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
                        <div style="margin-top:15px;font-size:13px;color:#969696;">
                          <span>科学搬砖</span>
                          <span style="float:right;">2天前</span>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="8">
                      <el-card shadow="hover">
                        <div style="background:#000000;">
                          <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                          </el-avatar>
                          <div style="padding: 5px;float:left;">
                            <span>AliPay</span>
                          </div>
                        </div></br>
                        <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
                        <div style="margin-top:15px;font-size:13px;color:#969696;">
                          <span>科学搬砖</span>
                          <span style="float:right;">2天前</span>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-card>
                <el-card style="margin-top:10px;" shadow="never">
                  <div slot="header" class="clearfix">
                    <span>最新动态</span>
                    <el-button style="float: right; padding: 3px 0" type="text">查看全部动态</el-button>
                  </div>
                  <el-table
                    :data="tableData"
                    style="width: 100%;height:100%;"
                    max-height="100%">
                    <el-table-column>
                      <template slot-scope="scope">
                        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @error="true" style="float:left;margin-top:-15px;">
                          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                        </el-avatar>
                        <div style="padding: 14px;float:left;">
                          <span>早安，Serati Ma，祝你开心每一天！</span>
                          <div class="bottom clearfix">
                            <el-button type="text" plain>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</el-button>
                          </div>
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="never" style="margin-top:10px;margin-left:5px;">
                  <div slot="header" class="clearfix">
                    <span>快速开始 / 便捷导航</span>
                  </div>
                  <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose1(tag)" style="margin-top:10px;">
                    {{tag}}
                  </el-tag>
                  <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                  >
                  </el-input>
                  <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane> -->
         <el-tab-pane
            key="admin"
            label="工作台"
            name="admin">
          </el-tab-pane>
          <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            closable 
            :name="item.name">
          </el-tab-pane>
        </el-tabs>
        <!-- <component v-bind:is="currentTabComponent" class="tab" style="background:#efefef"></component> -->
        <router-view style="background:#efefef"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import Blog from './Blog';
// import Main from './Main';
import { mapMutations } from 'vuex'

export default {
  name: 'AdminHome',
  components: {
    // Blog,
    // Main,
  },
  data() {
    return {
      activeName: 'second',
      screenWidth: 0,
      screenHeight:0,
      isCollapse: true,
      buttonIcon: "el-icon-s-fold",
      editableTabsValue: "",
      editableTabs: [],
      // tabIndex: 1,
      // curTab: 'admin',
      map: new Map([
        ['admin', '工作台'],
        ['admin/technique/blog', '博客'],
      ]),
    }
  },
  methods: {
    ...mapMutations([
      'setAdminTagNaveList',
      'setAdminCurTag',
    ]),
    open() {
      this.isCollapse = !this.isCollapse;
      if(this.buttonIcon === "el-icon-s-fold") this.buttonIcon = "el-icon-s-unfold";
      else this.buttonIcon = "el-icon-s-fold";
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    addTab(index, indexPath) {//添加导航栏
      // let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        title: this.map.get(index),
        name: index,
      });
      // this.curTab = index;
      
      var array = new Array(index);
      this.editableTabsValue = index;
      this.$router.push('/' + index);
      this.setAdminTagNaveList(this.editableTabs);
      this.setAdminCurTag(this.editableTabsValue);
    },
    removeTab(targetName) {//移出导航栏
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            } else{
              activeName = "admin";
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      // this.curTab = activeName;
      this.$router.push('/' + activeName);
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      this.setAdminTagNaveList(this.editableTabs);
      this.setAdminCurTag(this.editableTabsValue);
    },
    clickTab(targetName) {
      this.editableTabsValue = targetName.name;
      this.$router.push('/' + targetName.name);
      this.setAdminCurTag(this.editableTabsValue);
    },
    getFullCreeen(){
      this.n++;
      this.n%2==0? 
      this.outFullCreeen(document):this.inFullCreeen(document.documentElement)
    },
    inFullCreeen(element){
      let el = element;
      let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
        el.mozRequestFullScreen || el.msRequestFullScreen;
      if (typeof rfs != "undefined" && rfs) { 
        rfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    outFullCreeen(element){
      let el = element;
      let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
        el.mozCancelFullScreen || el.exitFullScreen;
      if (typeof cfs != "undefined" && cfs) { 
        cfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
  },
  computed: {
    height(){
      return `height:${this.screenHeight + 20}px`;
    },
    currentTabComponent: function() {
      return this.curTab;
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    this.editableTabs = this.$store.getters.getAdminTagNaveList;
    this.editableTabsValue = this.$store.getters.getAdminCurTag
    // console.log("homeTag:"+this.$store.state.app.currentAdminTag);
    // console.log("homeList:"+this.$store.state.app.adminTagNaveList);
    // console.log("homeNaveList:"+this.$store.getters.getAdminTagNaveList);
    // let te = this.$store.getters.getAdminTagNaveList;
    // console.log(JSON.stringify(te));
    
  },
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;;
  min-height: 400px;
}

.header-border{
  width:100%;
  height:100%;
  font-size:20px;
}

.border-bottom {
  border-bottom-style:solid;
  border-width:1px;
  border-bottom-color:#e6e6e6;
}

.font-size-all {
  font-size:15px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.header-float {
  float:right;
  margin-right:15px;
}


.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>