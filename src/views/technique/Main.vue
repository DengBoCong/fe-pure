<template>
  <div>
    <el-row style="margin-top:10px;">
      <el-col :span="24">
        <el-card></el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="空间" name="first"></el-tab-pane>
            <el-tab-pane label="页面" name="second"></el-tab-pane>
            <el-tab-pane label="社交" name="third"></el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="空间" name="first"></el-tab-pane>
            <el-tab-pane label="页面" name="second"></el-tab-pane>
            <el-tab-pane label="社交" name="third"></el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    //
  },
  data() {
    return{
      activeName: 'second',
    }
  },
  mounted() {
    //
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="less">
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