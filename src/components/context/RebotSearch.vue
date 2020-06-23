<template>
  <div class="person">
    <div class="person-con">
      <el-card style="width:100%;border:0;" shadow="never">
        <div class="demo-type" style="text-align:center;">
          <el-card>
            <div slot="header" class="clearfix">
              <span>快捷工具</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
        <el-divider content-position="center">相关说明</el-divider>
        <div>
        <p style="fontSize:13px;color:#868686;"><i class="el-icon-user"></i>    CV & Java爱好者</p></br>
        <p style="fontSize:13px;color:#868686;"><i class="el-icon-medal"></i>    华中科技大学-硕士在读-智能计算技术与应用</p></br>
        <p style="fontSize:13px;color:#868686;"><i class="el-icon-house"></i>    浙江省杭州市</p>
        </div>
        <el-divider content-position="center">自研的在线机器人(测试中)</el-divider>
          <div>
            <Dialog></Dialog>
          </div>
        <el-divider content-position="center">通告</el-divider>
        <div class="block">
        <el-carousel height="120px">
          <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Dialog from 'components/context/Dialog'

export default {
  name: 'RebotSearch',
  components: {
    Dialog,
  },
  methods: {
    //
  },
  data() {
    return {
      //
    }
  },
  mounted() {
    //
  },
}
</script>

<style  lang="less">
.person{
  width: 99%;
  height: 100%;
  /* background-image: url('../../assets/img/login-bg.png'); */
  background-size: cover;
  background-position: center;
  position: relative;
  &-con{
      // background-color: #000000;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 500px;
  }
}
</style>