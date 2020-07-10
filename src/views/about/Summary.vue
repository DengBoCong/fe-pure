<template>
  <el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-main :style="height" class="hiddenScrollbar">
    <el-tabs tab-position="left" style="height: 200px;">
      <el-tab-pane label="用户管理">
        <el-container>
          <el-card>
            <div class="demo-image__preview">
              <el-image 
                style="width: 100px; height: 100px"
                :src="url" 
                :preview-src-list="srcList">
              </el-image>
            </div>
          </el-card>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </el-main>
</el-container>
</template>

<script>
import Header from 'components/Header'

export default {
  name: 'Summary',
  computed: {
    height(){
      return `height:${this.screenHeight-61}px`;
    },
  },
  components: {
    Header,
  },
  methods: {
    //
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight:0,
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
  }
}
</script>