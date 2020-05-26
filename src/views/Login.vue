<template>
  <div class="login">
    <div class="login-con">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>欢迎登录 Ubiquity</span>
        </div>
        <div>
          <el-form :model="from" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="platform">
              <el-select v-model="from.platform" placeholder="请选择登录平台" class="width">
                <el-option label="大数据可视化平台" value="viewPlatform"></el-option>
                <el-option label="主控制台" value="backPlatform"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="account"><!--label="登录账户"-->
              <el-input v-model="from.account" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="from.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="保存密码" prop="isStorage" label-width="200px">
              <el-switch v-model="from.isStorage"></el-switch>
            </el-form-item>
            <el-form-item>
              <el-button class="width" type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import rules from 'utils/rules'
export default {
  name: 'Login',
  components: {
    //
  },
  data() {
    return {
      from: {
        account: '',
        platform: '',
        password: '',
        isStorage: false,
      },
      rules: {
        account: rules.checkPhone,
        password: rules.checkPwd,
        platform: [
          { required: true, message: '请选择登录平台', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(platform+" "+account+" "+password+" "+isStorage );
          handleSubmit(this.from.platform, this.from.account, this.from.password, this.from.isStorage,
          )
        } else {
          console.log('提交失败');
          return false;
        }
      });
    },
    handleSubmit ({ platform, account, password, isStorage }) {
      this.handleLogin({ platform, account, password, isStorage }).then(res => {
        // this.getUserInfo().then(res)
        // this.getUserInfo().then(res => {
        //   this.$router.push({
        //     name: this.$config.homeName
        //   })
        // })
        this.$router.push({
          name: this.$config.homeName
        })
      })
    }
  }
}
</script>

<style lang="less">
.login{
  width: 100%;
  height: 100%;
  // background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-position: center;
  position: relative;
  &-con{
      // background-color: #000000;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-60%) translateX(-50%);
      width: 400px;
  }
}
.text {
    font-size: 14px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 400px;
}

.width{
  width: 100%;
}
</style>