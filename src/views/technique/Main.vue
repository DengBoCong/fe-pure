<template>
  <el-container>
    <el-aside width="40%">
      <el-card>
        <el-carousel trigger="click" :height="noticeHeight">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-card>
      <el-card>
        <el-carousel :height="guideHeight" direction="vertical" :autoplay="false">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </el-aside>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最新消息" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="版本通知" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="用户专区" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="帮助与反馈" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import Markdown from 'components/Markdown';

export default {
  name: 'Main',
  components: {
    Markdown,
  },
  data() {
    return{
      screenWidth: 0,
      screenHeight:0,
      activeName: 'second'
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  computed: {
    noticeHeight(){
      return `${this.screenHeight*0.3}px`;
    },
    guideHeight(){
      return `${this.screenHeight-this.screenHeight*0.3-155}px`;
    }
  }
}
</script>

<style lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>