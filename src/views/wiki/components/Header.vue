<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">DengBoCong - Wiki </el-menu-item>
    <el-submenu index="2">
      <template slot="title">最近访问</template>
      <el-menu-item index="2-1" :disabled="true">无数据</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><router-link to="/admin" class="noneDe">用户中心</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/admin" class="noneDe">任务中心</router-link></el-menu-item>
    <el-submenu index="6" style="float:right;">
      <template slot="title">中文</template>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">中文</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">English</el-menu-item></router-link>
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
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
.noneDe {
   text-decoration:none;
   display:block;
}
</style>