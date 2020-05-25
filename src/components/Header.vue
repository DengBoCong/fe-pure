<template>
  <el-menu 
    :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="horizontal" 
    :router="true"
    @select="handleSelect">
    <el-submenu index="1">
      <template slot="title">技术中心</template><!-- <i class="el-icon-position"></i> -->
      <el-menu-item index="1-1">博客</el-menu-item>
      <el-menu-item index="1-2">技术学习</el-menu-item>
      <el-menu-item index="1-3">资源列表</el-menu-item>
      <el-menu-item index="1-4">API文档</el-menu-item>
      <el-menu-item index="interfile">归档</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">项目中心</template><!-- <i class="el-icon-bangzhu"></i> -->
      <el-menu-item index="2-1">wiki</el-menu-item>
      <el-menu-item index="2-2">开源项目</el-menu-item>
      <el-menu-item index="2-3">入口3</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">关于</template><!-- <i class="el-icon-user"></i> -->
      <el-menu-item index="3-1">吐槽说明</el-menu-item>
      <el-menu-item index="3-2">个人简历</el-menu-item>
      <el-menu-item index="3-3">我的标签</el-menu-item>
      <el-menu-item index="3-4">生活和爱情</el-menu-item>
      <el-menu-item index="3-5">兴趣爱好</el-menu-item>
      <el-menu-item index="3-6">创业那些事儿</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">友情链接</template><!-- <i class="el-icon-link"></i> -->
      <el-menu-item index="4-1">#</el-menu-item>
      <el-menu-item index="4-2">#</el-menu-item>
      <el-menu-item index="4-3">#</el-menu-item>
      <el-menu-item index="4-4">#</el-menu-item>
      <el-menu-item index="4-5">#</el-menu-item>
      <el-menu-item index="4-6">#</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">工作台</template><!-- <i class="el-icon-bank-card"></i> -->
      <el-menu-item index="5-1">提交工单</el-menu-item>
      <el-menu-item index="5-2">账号空间</el-menu-item>
      <el-menu-item index="5-3">后台管理</el-menu-item>
      <el-menu-item index="5-4">六小六系统</el-menu-item>
      <el-menu-item index="5-5">中心系统</el-menu-item>
    </el-submenu>

    <el-submenu index="6" style="float:right;">
      <template slot="title">中文</template>
      <el-menu-item index="6-1">中文</el-menu-item>
      <el-menu-item index="6-2">English</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  components: {
    //
  },
  data() {
    return {
      activeIndex: '1-1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}
</script>