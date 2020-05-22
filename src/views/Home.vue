<template>
  <el-container class="size">
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="400px">
        <el-card style="width:90%;margin:5%;">
          <div class="demo-type" style="text-align:center;">
            <el-avatar :size="70" src="https://img-blog.csdnimg.cn/20200522154246646.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70" @error="true">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
            <div style="text-align:center;margin-top:10px;"><b>DengBoCong</b></div>
            <p style="text-align:center;margin-top:10px;fontSize:13px;color:#868686;">依旧相信梦想，始终年轻，始终热泪盈眶</p>
          </div>
          <el-divider></el-divider>
          <div>
            <p style="fontSize:13px;color:#868686;"><i class="el-icon-user"></i>    CV & Java爱好者</p></br>
            <p style="fontSize:13px;color:#868686;"><i class="el-icon-medal"></i>    华中科技大学-硕士在读-智能计算技术与应用</p></br>
            <p style="fontSize:13px;color:#868686;"><i class="el-icon-house"></i>    浙江省杭州市</p>
          </div>
          <el-divider><i class="el-icon-link"></i></el-divider>
          <div>
            <div>
              <el-link type="primary" href="https://github.com/DengBoCong">GitHub</el-link>
              <el-divider direction="vertical"></el-divider>
              <span><el-link type="primary" href="https://dengbocong.blog.csdn.net/">CSDN</el-link></span>
            </div>
          </div>
        </el-card>
        <el-card style="width:90%;margin:5%;">
          <div class="block">
            <el-carousel height="150px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-card>
      </el-aside>
      <el-main>
        <el-tabs tab-position="right" v-model="activeName" @tab-click="handleClick" style="height:100%;">
          <el-tab-pane label="用户管理" lazy="true" name="first" style="background:#000000">
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <el-card shadow="hover" style="margin:1%">
                鼠标悬浮时显示
              </el-card>
            </el-container>
            <el-container>
              <div class="block" style="margin-left:auto; margin-right:auto">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                </el-pagination>
              </div>
            </el-container>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <el-footer style="padding:0;margin:0;">
      <el-card style="width:100%;margin:0;padding:0;">
        <el-popover
          placement="top-start"
          width="400"
          trigger="click">
          <p>个人喜欢钻研技术，主要倒腾Java和视觉算法，前端也会玩一下。</p>
          <el-link target="_blank" href="https://github.com/DengBoCong" type="primary">GitHub</el-link>--目前public的项目不多，主要private自己玩<br>
          <el-link target="_blank" href="https://dengbocong.blog.csdn.net/" type="primary">CSDN社区</el-link>--目前是博客专家，欢迎关注和留言
          <el-button type="text" slot="reference" style="margin-left:40%;left:-400px;margin-top:-10px;">DengBoCong版权所有，保留一切权利 赣ICP备20002291号</el-button>
        </el-popover>
      </el-card>
    </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ScrollBar from 'components/ScrollBar'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ScrollBar,
  },
  data() {
    return {
      activeIndex: '1',
      screenWidth: document.body.clientWidth + "px", // 屏幕宽度
      screenHeight: document.body.clientHeight + "px", // 屏幕高度
      currentPage4: 4,
      activeName: 'first',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style>
/* 

 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  

  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  } */
</style>