<template>
  <el-container>
    <el-header style="padding:0;">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">DengBoCong - 开源项目 </el-menu-item>
        <el-submenu index="2">
          <template slot="title">最近访问</template>
          <el-menu-item index="2-1" :disabled="true">无数据</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><router-link to="/admin" class="noneDe">用户中心</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/admin" class="noneDe">任务中心</router-link></el-menu-item>
        <el-submenu index="6" style="float:right;">
          <template slot="title">中文</template>
          <router-link to="/admin" class="noneDe"><el-menu-item index="admin">中文</el-menu-item></router-link>
          <router-link to="/admin" class="noneDe"><el-menu-item index="admin">English</el-menu-item></router-link>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main :style="height" class="hiddenScrollbar">
      <el-card shadow="never" :body-style="{ padding: '50px' }" style="width:100%;border:0">
        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @error="true" style="float:left;margin-top:-15px;">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
        </el-avatar>
        <div style="padding: 14px;float:left;">
          <span>早安，Serati Ma，祝你开心每一天！</span>
          <div class="bottom clearfix">
            <el-button type="text" plain>全系统机器人协同中，如有疑问，请点击这里进行以其人搜索</el-button>
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
              <span>全部项目</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="openGoingProjectList">正在进行的项目</el-button>
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
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" style="margin-top:10px;margin-left:5px;">
            <div slot="header" class="clearfix">
              <span>快速开始 / 便捷导航</span>
            </div>
          </el-card>
          <el-card style="margin-top:10px;margin-left:5px;" shadow="never">
            <div slot="header" class="clearfix">
              <span>工程日志</span>
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
      </el-row>
    </el-main>
    <el-dialog title="正在进行的项目开发列表" :visible.sync="goingDialogVisible">
      <el-table
        :data="gridData"
        style="width: 100%;height:100%;"
        show-header="false"
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
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  components: {
    //
  },
  methods: {
    openGoingProjectList() {
      this.goingDialogVisible = true;
    },
    handleSelect() {
      
    }
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight:0,
      goingDialogVisible: false,
      gridData: [],
      tableData: [],
      activeIndex2: "",
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
  },
  computed: {
    height(){
      return `height:${this.screenHeight-61}px`;
    },
  }
}
</script>