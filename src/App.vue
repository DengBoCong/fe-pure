<template>
  <div id="app">
    <el-container>
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
    <el-main>
      <el-row :gutter="20" style="width:100%;">
        <el-col :span="6">
          <el-card class="box-card">
            放头像
          </el-card>
        </el-col>
        <el-col :span="12">
          <div class="block">
            <el-carousel height="150px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <ScrollBar style="height:500px;">
            <el-container>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>卡片名称</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>
            </el-container>
            <el-container>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>卡片名称</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>
            </el-container>
          </ScrollBar>
        </el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-card class="box-card">
        <el-popover
          placement="top-start"
          trigger="click">
          <p></p>
          <el-button type="text" slot="reference">DengBoCong版权所有，保留一切权利</el-button>
        </el-popover>
      </el-card>
    </el-footer>
  </el-container>
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>

<script>
import ScrollBar from 'components/ScrollBar'

  export default {
    components: {
      ScrollBar,
    },
    data() {
      return {
        activeIndex: '1',
        screenWidth: document.body.clientWidth + "px", // 屏幕宽度
        screenHeight: document.body.clientHeight + "px", // 屏幕高度
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style>
@import "assets/css/base.css";
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
  }

  .box-card {
    width: 100%;
  }

  
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
