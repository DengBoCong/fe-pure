<template>
  <el-menu 
    :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="horizontal" 
    :router="false"
    @select="handleSelect">
    <el-submenu index="1">
      <template slot="title">技术中心</template><!-- <i class="el-icon-position"></i> -->
      <router-link to="/home" class="noneDe"><el-menu-item index="home">博客</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">技术学习</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">资源列表</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">API文档</el-menu-item></router-link>
      <router-link to="/interfile" class="noneDe"><el-menu-item index="interfile">归档</el-menu-item></router-link>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">项目中心</template><!-- <i class="el-icon-bangzhu"></i> -->
      <el-menu-item index="wiki" @click="openLoading">wiki</el-menu-item>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">开源项目</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">入口3</el-menu-item></router-link>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">关于</template><!-- <i class="el-icon-user"></i> -->
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">吐槽说明</el-menu-item></router-link>
      <router-link to="/record" class="noneDe"><el-menu-item index="record">个人履历</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">我的标签</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">生活和爱情</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">兴趣爱好</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">创业那些事儿</el-menu-item></router-link>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">友情链接</template><!-- <i class="el-icon-link"></i> -->
      <el-menu-item index="admin">#</el-menu-item>
      <el-menu-item index="admin">#</el-menu-item>
      <el-menu-item index="admin">#</el-menu-item>
      <el-menu-item index="admin">#</el-menu-item>
      <el-menu-item index="admin">#</el-menu-item>
      <el-menu-item index="admin">#</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">工作台</template><!-- <i class="el-icon-bank-card"></i> -->
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">提交工单</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">账号空间</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">后台管理</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">六小六系统</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">中心系统</el-menu-item></router-link>
    </el-submenu>

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
      activeIndex: '1-1',
      loadingTip: '转接中，本系统未开启稳定设置，防止恶意点击，请耐心等待！'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    openLoading() {
       const loading = this.$loading({
        lock: true,
        text: this.loadingTip,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        this.$router.push('/wiki')
      }, 2000);
    }
  },
}
</script>

<style lang="less">
.noneDe {
   text-decoration:none;
}
</style>