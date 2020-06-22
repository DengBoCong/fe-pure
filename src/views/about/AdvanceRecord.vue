<template>
  <div>
    <el-carousel :height="height" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 3" :key="item">
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        点我打开
      </el-button>
    </el-carousel-item>
  </el-carousel>
  <el-drawer
    title="我是标题"
    :visible.sync="drawer"
    direction="ltr"
    size="400px"
    :with-header="false">
    <PersonCard></PersonCard>
  </el-drawer>
  </div>
</template>

<script>
import PersonCard from 'components/context/PersonCard';

export default {
  name: 'AdvanceRecord',
  components: {
    PersonCard,
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight:0,
      drawer: false,
    }
  },
  computed: {
    height(){
      return `${this.screenHeight}px`;
    },
  },
  methods: {
    //
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
  },
}
</script>

<style lang="less">
  .el-carousel__item h3 {
    color: #e0e8f3;
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