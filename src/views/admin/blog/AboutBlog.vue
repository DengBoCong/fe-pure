<template>
  <div>
    <el-tabs tab-position="left" style="background:#ffffff;">
      <el-tab-pane label="文章分类"><ArticleType></ArticleType></el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ArticleType from './ArticleType'

  export default {
    name: 'AboutBlog',
    components: {
      ArticleType,
    },
    data() {
      return {
        //
      };
    }
  };
</script>