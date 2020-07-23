<template>
  <el-container class="size">
    <el-aside width="400px" class="hiddenScrollbar">
      <PersonCard style="border-right:1px solid #D1D1D1;"></PersonCard>
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
import { setToken, getToken } from 'utils/util'
import { getNoticeMessageTypeOne } from '@/api/message'

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
      let messageToken = this.$store.state.app.messageToken;
      const h = this.$createElement;
      if(!messageToken){
        getNoticeMessageTypeOne({type:"systemNotice"}).then(res => {
          if(res.data.code != 0) return;
          this.setMessageToken(res.data.data.type);
          this.$notify({
            title: res.data.data.title,
            message: h('i', { style: 'color: '+res.data.data.contentColor}, res.data.data.content),
            duration: 8500,
          });
        })
      }
    },
    methods: {
      ...mapMutations([
        'setMessageToken'
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