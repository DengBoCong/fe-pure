<template>
  <div>
    <el-card shadow="never" :body-style="{ padding: '50px' }" style="width:100%;">
      <el-row>
        <el-col :span="12">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-card><!-- style="border:0;" shadow="never" -->
            <el-row>
              <el-col :span="6" style="text-align:center;">
                <el-avatar shape="square" :size="100" fit="fill" src="https://img-blog.csdnimg.cn/20200622113122977.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"></el-avatar>
              </el-col>
              <el-col :span="18">
                <el-row>
                  <el-col :span="24" style="text-align:center;">
                    <p style="font-size:30px;color:#666666;"><b><i class="el-icon-s-promotion"></i> DengBoCong</b></p>
                  </el-col>
                </el-row>
                <el-row style="margin:10px;">
                  <el-col :span="24" style="text-align:center;">
                    <p style="font-size:15px;color:#6C6C6C;">致力于成为中国第一，世界一流的中间件技术人</p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12" style="text-align:center;">
                    <el-button type="text" icon="el-icon-picture-outline">照片组图</el-button>
                    <el-divider direction="vertical"></el-divider>
                    <router-link to="/advrecord"><el-button type="text" icon="el-icon-c-scale-to-original">炫酷简历</el-button></router-link>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text" icon="el-icon-postcard">联系方式</el-button>
                  </el-col>
                  <el-col :span="12" style="text-align:center;">
                    <router-link to="/home"><el-button type="text" icon="el-icon-house">首页</el-button></router-link>
                    <el-divider direction="vertical"></el-divider>
                    <router-link to="/search"><el-button type="text" icon="el-icon-search">搜索</el-button></router-link>
                    <el-divider direction="vertical"></el-divider>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        语言<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>中文简体</el-dropdown-item>
                        <el-dropdown-item>中文繁体</el-dropdown-item>
                        <el-dropdown-item>English</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
                <el-row style="margin:10px;">
                  <el-col :span="24">
                    <p style="font-size:15px;line-height:25px;color:#6C6C6C;">我有话说：喜欢钻研技术，主要倒腾NLP和JAVA，前端也会玩一下。本人编写博文均为学习使用，若博文引用的内容存在侵权问题望告知，立即删改！</p>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Record',
  components: {
    //
  },
  mounted() {
    //
  },
  methods: {
    submitForm(formName) {
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
    }
  },
  data() {
    return {
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
  }
}
</script>