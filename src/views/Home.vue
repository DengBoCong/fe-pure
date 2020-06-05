<template>
  <el-container class="size">
    <el-aside width="400px">
      <PersonCard></PersonCard>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main style="padding:0;">
        <el-container>
          <router-view></router-view>
          <!-- <ContentDetail></ContentDetail> -->
          <!-- <MainTabPane></MainTabPane> -->
          <!-- <router-view></router-view> -->
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ScrollBar from 'components/ScrollBar';
import PersonCard from 'components/context/PersonCard';
import Header from 'components/Header';
import MainTabPane from 'views/MainTabPane';
import ContentDetail from 'views/ContentDetail';
import { mapMutations } from 'vuex'

  export default {
    name: 'Home',
    components: {
      ScrollBar,
      PersonCard,
      Header,
      MainTabPane,
      ContentDetail,
    },
    computed:{
      //
    },
    data() {
      return {
        //
      };
    },
    mounted(){
      const h = this.$createElement;
      if(!this.$store.state.app.isTipOpen){
        this.setTipOpen();
        this.$notify({
          title: '系统未开放通知',
          message: h('i', { style: 'color: teal'}, '系统处于开发测试中，线上版本系统已被设置全禁止权限，仅限部分授权账号进行登录'),
          duration: 6500,
        });
      }
    },
    methods: {
      ...mapMutations([
        'setTipOpen'
      ]),
    }
  }
</script>


<style>
.size{
  width: 100%;
  height: 100%;
}
</style>