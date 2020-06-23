<template>
  <el-container>
    <el-main style="height:400px;padding:0;" class="hiddenScrollbar">
      <el-row>
        <el-col :span="4">
          <el-avatar 
            :size="50" 
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
          </el-avatar>
        </el-col>
        <el-col :span="20">
          <p style="font-size:13px;color:#B5B5B5;">2020-06-23 16:06:16</p>
          <el-card>
            <p style="font-size:13px;">Hi，18870125082，中午好，很高兴跟你做朋友，以后请多多指教！</p>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20">
          <p style="font-size:13px;color:#B5B5B5;">2020-06-23 16:06:16</p>
          <el-card>
            <p style="font-size:13px;">Hi，18870125082，中午好，很高兴跟你做朋友，以后请多多指教！</p>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-avatar 
            :size="50" 
            style="float:right;"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
          </el-avatar>
        </el-col>
      </el-row>
    </el-main>
    <el-divider></el-divider>
    <el-footer style="padding:0;height:150px;">
      <el-form :model="sendRobotMessage">
        <el-form-item>
          <el-input type="textarea" 
          v-model="sendRobotMessage.message" 
          maxlength="100" 
          rows="4"
          show-word-limit></el-input>
        </el-form-item>
        <el-form-item style="text-align:center;">
          <el-button type="primary" icon="el-icon-s-promotion" @click="onSubmit">发送</el-button>
          <el-button>关闭连接</el-button>
        </el-form-item>
      </el-form>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'SideRobotDialog',
  components: {
    //
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  data() {
    return {
      sendRobotMessage: {
        message: "",
      },
    }
  },
  mounted() {
    //
  },
}
</script>