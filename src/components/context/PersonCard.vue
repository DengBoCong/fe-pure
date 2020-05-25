<template>
  <el-card style="width:90%;margin:5%;">
    <div class="demo-type" style="text-align:center;">
      <el-avatar :size="70" src="https://img-blog.csdnimg.cn/20200522154246646.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70" @error="true">
         <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </el-avatar>
      <div style="text-align:center;margin-top:10px;"><b>DengBoCong</b></div>
      <p style="text-align:center;margin-top:10px;fontSize:13px;color:#868686;">依旧相信梦想，始终年轻，始终热泪盈眶</p>
    </div>
    <el-divider content-position="center">介绍</el-divider>
    <div>
    <p style="fontSize:13px;color:#868686;"><i class="el-icon-user"></i>    CV & Java爱好者</p></br>
    <p style="fontSize:13px;color:#868686;"><i class="el-icon-medal"></i>    华中科技大学-硕士在读-智能计算技术与应用</p></br>
    <p style="fontSize:13px;color:#868686;"><i class="el-icon-house"></i>    浙江省杭州市</p>
    </div>
    <el-divider content-position="center">其他</el-divider>
    <div>
    <div>
      <el-link :underline="false" type="primary" href="https://github.com/DengBoCong">GitHub</el-link>
      <el-divider direction="vertical"></el-divider>
      <span><el-link :underline="false" type="primary" href="https://dengbocong.blog.csdn.net/">CSDN</el-link></span>
      <el-divider direction="vertical"></el-divider>
      <span style="fontSize:13px;color:#868686;float:right;">赣ICP备20002291号</span>
    </div>
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
</template>

<script>
export default {
  name: 'PersonCard',
  components: {
    
  }
}
</script>