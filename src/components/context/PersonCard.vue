<template>
  <div class="person">
    <div class="person-con">
      <el-card style="width:95%;margin:2.5%;border:0;" shadow="never">
        <div class="demo-type" style="text-align:center;">
          <el-avatar :size="70" :src="userAvatar" @error="true">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
          </el-avatar>
          <div style="text-align:center;margin-top:10px;"><el-button type="text" @click="setAccess">{{userNickName}}</el-button></div>
          <p style="text-align:center;margin-top:10px;fontSize:13px;color:#868686;">{{userFlag}}</p>
        </div>
        <el-divider content-position="center">介绍</el-divider>
        <div>
        <p style="fontSize:13px;color:#868686;"><i class="el-icon-user"></i>    {{userFeature}}</p></br>
        <p style="fontSize:13px;color:#868686;"><i class="el-icon-medal"></i>    {{userPosition}}</p></br>
        <p style="fontSize:13px;color:#868686;"><i class="el-icon-house"></i>    {{userAddress}}</p>
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
        <el-divider content-position="center">{{$t('home.notice')}}</el-divider>
        <div class="block">
        <el-carousel height="120px">
          <el-carousel-item v-for="item in advertiseArray" :key="item.id">
            <h3 class="small" v-if="item.cover == ''">{{ item.description }}</h3>
            <el-image v-if="item.cover != ''" :src="item.cover" fit="fill">
              <div slot="placeholder" class="image-slot">
                <h3 class="small" v-if="item.cover == ''">加载中<span class="dot">...</span></h3>
              </div>
            </el-image>
          </el-carousel-item>
        </el-carousel>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getSuperInfo } from "@/api/user"
import { getAdvertiseTypeOne } from '@/api/message'
import { setToken, getToken } from 'utils/util'

export default {
  name: 'PersonCard',
  components: {
    //
  },
  data() {
    return {
      userAvatar: "", //用户头像
      userNickName: "underline",//用户昵称
      userFlag: "underline",//用户口号
      userAddress: "underline",//用户地址
      userFeature: "underline",//用户特征
      userPosition: "underline",//用户职位
      advertiseArray: [],
    }
  },
  mounted() {
    getSuperInfo().then(res => {
      if(res.data.code == 3) return;
      this.userAvatar = res.data.data.avatar;
      this.userNickName = res.data.data.nickName;
      this.userFlag = res.data.data.flag;
      this.userAddress = res.data.data.address;
      this.userFeature = res.data.data.feature;
      this.userPosition = res.data.data.position;
    });
    getAdvertiseTypeOne({type:"personCard"}).then(res => {
      if(res.data.code != 0) return;
      this.advertiseArray = res.data.data;
    })
  },
  methods: {
    setAccess() {
      setToken("USER_ACCESS_LIST", '');
      setToken("ACCESS_LIST", '');
      setToken("MESSAGE_TOKEN", '');
    }
  }
}
</script>

<style lang="less">
.person{
  width: 99%;
  height: 100%;
  /* background-image: url('../../assets/img/login-bg.png'); */
  background-size: cover;
  background-position: center;
  position: relative;
  &-con{
      // background-color: #000000;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 400px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 120px;
  text-align: center;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>