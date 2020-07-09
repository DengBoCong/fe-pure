<template>
  <div class="error-page">
    <div class="error-code">4<span>0</span>3</div>
    <div class="error-desc">啊哦~ 权限识别失败，你没有权限访问哦</div>
    <div class="error-acs">如果是误点进入的客官，请出门左拐返回上一页哦。有权限账号的客官，选择分流登录，将为你跳转分流系统登录</div>
    <div class="error-handle">
      <!-- <el-button type="primary" size="medium" @click="goBack">返回上一页</el-button> -->
      <router-link to="/home">
        <el-button type="primary" size="medium">返回首页</el-button>
      </router-link>
      <router-link to="/login">
        <el-button class="error-btn" type="primary" size="medium">分流登录</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    goBack(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>


<style scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}

.error-page{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  box-sizing: border-box;
}
.error-code{
  line-height: 1;
  font-size: 150px;
  font-weight: 100;
  color: #676767;
}
.error-desc{
  font-size: 18px;
  color: #676767;
}
.error-acs{
  width: 400px;;
  margin-top: 20px;;
  font-size: 13px;
  color: #676767;
}
.error-handle{
  margin-top: 30px;
  padding-bottom: 200px;
}
.error-btn{
  margin-left: 100px;
}
</style>