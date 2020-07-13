<template>
  <div class="error-page">
    <div class="error-code">4<span>0</span>3</div>
    <div class="error-desc">嘿嘿嘿~ 禁止访问，该地址处于禁止访问状态</div>
    <div class="error-acs">所访问的资源可能处于维护或者其他原因被关闭，如果有任何疑问，可以前往提交工单联系我哦！</div>
    <div class="error-handle">
      <!-- <el-button type="primary" size="medium" @click="goBack">返回上一页</el-button> -->
      <router-link to="/home">
        <el-button type="primary" size="medium">返回首页</el-button>
      </router-link>
      <router-link to="/workorder">
        <el-button class="error-btn" type="primary" size="medium">提交工单</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {//403禁止访问
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