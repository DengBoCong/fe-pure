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
      //
    },
    methods: {
      //
    }
  }
</script>


<style>

</style>