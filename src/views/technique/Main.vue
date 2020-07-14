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
            <el-tab-pane label="空间" name="first">
              <el-row style="padding:5px;">
                <el-col :span="24">
                  <el-card shadow="hover" style="cursor: pointer;width:100%;">
                    <el-container>
                      <el-image
                        style="width: 100px; height: 100px;"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="fill"></el-image>
                      <div>
                        <b style="margin-left:20px;font-size:20px;weight:1;">资源标题</b>
                        <p style="margin-left:20px;margin-top:10px;font-size:13px;color:#6A6A6A">哈哈哈哈</p>
                      </div>
                    </el-container>
                  </el-card>
                </el-col>
                <el-col :span="24" style="margin-top:10px;">
                  <el-card shadow="hover" style="cursor: pointer;width:100%;">
                    <el-container>
                      <el-image
                        style="width: 100px; height: 100px;"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="fill"></el-image>
                      <div>
                        <b style="margin-left:20px;font-size:20px;weight:1;">资源标题</b>
                        <p style="margin-left:20px;margin-top:10px;font-size:13px;color:#6A6A6A">哈哈哈哈</p>
                      </div>
                    </el-container>
                  </el-card>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="页面" name="second"></el-tab-pane>
            <el-tab-pane label="社交" name="third"></el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="空间" name="first">
              <el-row style="padding:5px;" :gutter="10">
                <el-col :span="12">
                  <el-card shadow="hover" style="width:100%;">
                    <el-container>
                      <el-image
                        style="width: 100px; height: 100px;"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="fill"></el-image>
                      <div>
                        <el-button type="text" style="margin-left:20px;font-size:20px;weight:1;" @click="drawer = true">资源标题</el-button>
                        <p style="margin-left:20px;font-size:13px;color:#6A6A6A">哈哈哈哈</p>
                      </div>
                    </el-container>
                  </el-card>
                </el-col>
                <el-col :span="12">
                  <el-card shadow="hover" style="width:100%;">
                    <el-container>
                      <el-image
                        style="width: 100px; height: 100px;"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="fill"></el-image>
                      <div>
                        <b style="margin-left:20px;font-size:20px;weight:1;">资源标题</b>
                        <p style="margin-left:20px;margin-top:10px;font-size:13px;color:#6A6A6A">哈哈哈哈</p>
                      </div>
                    </el-container>
                  </el-card>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="页面" name="second"></el-tab-pane>
            <el-tab-pane label="社交" name="third"></el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      direction="ttb"
      :modal="true">
      <span>我来啦!</span>
    </el-drawer>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      direction="ltr"
      :modal="false">
      <span>我来啦!</span>
    </el-drawer>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      direction="rtl"
      :modal="false">
      <span>我来啦!</span>
    </el-drawer>
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
      activeName: 'first',
      drawer: false,
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