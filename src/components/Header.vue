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
      <!-- <router-link to="/admin" class="noneDe"><el-menu-item index="admin">技术学习</el-menu-item></router-link> -->
      <router-link to="/resources" class="noneDe"><el-menu-item index="resources">资源列表</el-menu-item></router-link>
      <router-link to="/document" class="noneDe"><el-menu-item index="document">API文档</el-menu-item></router-link>
      <router-link to="/interfile" class="noneDe"><el-menu-item index="interfile">归档</el-menu-item></router-link>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">项目中心</template><!-- <i class="el-icon-bangzhu"></i> -->
      <el-menu-item index="wiki" @click="openLoading">wiki</el-menu-item>
      <router-link to="/project" class="noneDe"><el-menu-item index="project">开源项目</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">入口3</el-menu-item></router-link>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">关于</template><!-- <i class="el-icon-user"></i> -->
      <router-link to="/explain" class="noneDe"><el-menu-item index="explain">吐槽说明</el-menu-item></router-link>
      <router-link to="/record" class="noneDe"><el-menu-item index="record">个人履历</el-menu-item></router-link>
      <router-link to="/summary" class="noneDe"><el-menu-item index="summary">诗和远方</el-menu-item></router-link>
      <!-- <router-link to="/admin" class="noneDe"><el-menu-item index="admin">生活和爱情</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">兴趣爱好</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">创业那些事儿</el-menu-item></router-link> -->
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
      <router-link to="/workorder" class="noneDe"><el-menu-item index="workorder">提交工单</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">账号空间</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">后台管理</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">六小六系统</el-menu-item></router-link>
      <router-link to="/admin" class="noneDe"><el-menu-item index="admin">中心系统</el-menu-item></router-link>
    </el-submenu>
    <el-submenu v-if="$config.useI18n" index="lang" style="float:right;">
      <template slot="title">语言</template>
      <el-menu-item index="zh-CN">中文简体</el-menu-item>
      <el-menu-item index="en-US">English</el-menu-item>
      <el-menu-item index="zh-TW">中文繁體</el-menu-item>
    </el-submenu>
    <el-button type="text" icon="el-icon-search" style="float:right;margin-top:10px;" @click="openSearch"></el-button>
    <el-dialog title="站内搜索仅支持对文章、项目、工具等已标记内容的搜索" :show-close="false" :visible.sync="searchDialogVisible" center>
      <el-input placeholder="请输入搜索内容" v-model="searchInput" class="input-with-select">
        <el-select v-model="searchTypeSelect" slot="prepend" placeholder="请选择">
          <el-option label="站内搜索" value="1"></el-option>
          <el-option label="站外搜索" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="searchContent"></el-button>
      </el-input>
    </el-dialog>
  </el-menu>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {
    //
  },
  data() {
    return {
      // lang: '',
      // localeData: '',
      activeIndex: '1-1',
      loadingTip: '转接中，本系统未开启稳定设置，防止恶意点击，请耐心等待！',
      searchDialogVisible: false,
      searchTypeSelect: '',
      searchInput: '',
    }
  },
  methods: {
    ...mapMutations([
      'setLocal',
    ]),
    handleSelect(key, keyPath) {
      //语言切换
      if(keyPath[0] == 'lang') {
        this.setLocal(key);
        this.$i18n.locale = key;
        window.location.reload(true);
      }
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
    },
    openSearch() {//打开搜索框
      this.searchDialogVisible = true;
    },
    searchContent() {
      this.$router.push("/search");
    }
  },
  mounted() {
    //设置国际化
    if(this.$store.getters.getLocal == 'admin') {
      this.setLocal('zh-CN');
    }
    
    // this.lang = this.$store.getters.getLocal;
    // this.localeData = new Promise((resolve, reject) => {
    //   const elementLang = () => import(`@/locale/lang/${this.lang}`); // import属于异步操作
    //   elementLang().then((langRes) => {
    //     const eleLang = langRes['default'];
    //     resolve(eleLang);
    //   }).catch(() => {
    //     reject(lang);
    //   })
    // })
  }
}
</script>

<style lang="less">
.noneDe {
   text-decoration:none;
}
</style>