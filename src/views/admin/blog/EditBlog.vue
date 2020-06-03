<template>
  <div>
    <el-container>
      <el-button style="width:110px;" plain>返回上一页</el-button>
      <el-input 
        placeholder="请输入内容"
        v-model="input"
        clearable
        :maxlength="100"
        :style="width">
      </el-input>
      <el-button style="width:100px;">保存草稿</el-button>
      <el-button style="margin:0;width:100px;" type="primary" @click="outerVisible = true">发表文章</el-button>
    </el-container>
    <el-container>
      <mavon-editor v-model="value" 
        :style="height"
        :boxShadow="false"/>
    </el-container>
    <el-container>
      <el-dialog title="外层 Dialog" :visible.sync="outerVisible" center>
        <el-card style="text-align:center;border:0;" shadow="never">请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等内容，详见资源共享规范</el-card>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="文章标签" prop="name">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </el-form-item>
          <el-form-item label="文章类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="原创" value="yuanchuang"></el-option>
              <el-option label="转载" value="zhuanzai"></el-option>
              <el-option label="翻译" value="fanyi"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="定时发布" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col style="text-align:center;" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="文章分类" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="深度学习" name="type"></el-checkbox>
              <el-checkbox label="深入浅出Java" name="type"></el-checkbox>
              <el-checkbox label="技术杂谈" name="type"></el-checkbox>
              <el-checkbox label="算法与数据结构" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="发布形式" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="公开"></el-radio>
              <el-radio label="私密"></el-radio>
              <el-radio label="用户可见"></el-radio>
              <el-radio label="私密"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <el-dialog
          width="30%"
          title="内层 Dialog"
          :visible.sync="innerVisible"
          append-to-body
          center>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="submitForm('ruleForm')">保存草稿</el-button>
          <el-button type="primary" @click="resetForm('ruleForm')">发布文章</el-button>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'EditBlog',
  components: {
    //
  },
  computed: {
    height(){
      return `height:${this.screenHeight-160}px;width:100%;`;
    },
    width() {
      return `width:${this.screenWidth-375}px`;
    }
  },
  data() {
    return {
      value: '',
      input: '',
      screenWidth: 0,
      screenHeight:0,
      outerVisible: false,
      innerVisible: false,
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.outerVisible = false;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.innerVisible = true;
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
  },
}
</script>

<style lang="less">
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>