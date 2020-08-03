<template>
  <el-container>
    <el-aside width="40%">
      <el-card>
        <el-carousel trigger="click" height="200px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-card>
      <el-card>
        <el-carousel height="200px" direction="vertical" :autoplay="false">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </el-aside>
    <el-main>Main</el-main>
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
      //
    }
  },
  mounted() {
    //
  },
  methods: {
    //
  },
  computed: {
    //
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