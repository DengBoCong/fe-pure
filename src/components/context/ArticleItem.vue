<template>
  <div>
    <div style="margin-top:10px;"><b>{{itemData.subTitle}}</b></div>
    <div style="margin-top:10px;"><b>
      <el-tag type="info" size="medium">中等标签</el-tag></b>
      <el-tag type="info" size="medium">中等标签</el-tag>
      <el-tag type="info" size="medium">中等标签</el-tag>
    </div>
    <div style="margin-top:10px;"><p>段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。</p></div>
    <div style="margin-top:10px;">
      <el-avatar size="small" src="https://img-blog.csdnimg.cn/20200522154246646.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70" @error="true">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </el-avatar>
      <span style="font-size:13px;"><el-link :underline="false" type="primary">DengBoCong </el-link> 发布于 2020-05-22 15:09</span>
    </div>
    <div style="margin-top:10px;">
      <span><i class="el-icon-view">161</i></span>
      <el-divider direction="vertical"></el-divider>
      <span><i class="el-icon-thumb">161</i></span>
      <el-divider direction="vertical"></el-divider>
      <span><i class="el-icon-star-off">161</i></span>
      <el-divider direction="vertical"></el-divider>
      <span><i class="el-icon-chat-dot-round">161</i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {
    //
  },
  props: {
    itemData: {
      type: Object,
      default: ()=> {}
    },
  },
}
</script>