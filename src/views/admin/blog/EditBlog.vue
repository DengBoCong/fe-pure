<template>
  <div>
    <el-container>
      <el-button style="width:110px;" plain>返回上一页</el-button>
      <el-input 
        placeholder="请输入内容"
        v-model="titleInput"
        clearable
        :maxlength="100"
        :style="width">
      </el-input>
      <el-button style="width:100px;">保存草稿</el-button>
      <el-button style="margin:0;width:100px;" type="primary" @click="outerVisible = true">发表文章</el-button>
    </el-container>
    <el-container>
      <mavon-editor v-model="content" 
        :style="height"
        :boxShadow="false"/>
    </el-container>
    <el-container>
      <el-dialog title="发布文章" :visible.sync="outerVisible" center>
        <el-card style="text-align:center;border:0;" shadow="never">请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等内容，详见资源共享规范</el-card>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="文章标签" prop="articleTag">
            <el-tag
              :key="tag"
              v-for="tag in ruleForm.articleTag"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="tagInputVisible"
              v-model="tagInputValue"
              ref="saveTagInput"
              size="small"
              maxlength="15"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput" :disabled="isAddTag">+ New Tag</el-button>
          </el-form-item>
          <el-form-item label="添加子标题">
            <el-col :span="12">
              <el-form-item>
                <el-input 
                  placeholder="请输入子标题(选填)"
                  v-model="subTitleInput"
                  clearable
                  :maxlength="10"
                  style="width:100%">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="文章类型" prop="articleFlag">
                <el-select v-model="ruleForm.articleFlag" placeholder="请选择文章标签">
                  <el-option label="原创" value="原创"></el-option>
                  <el-option label="转载" value="转载"></el-option>
                  <el-option label="翻译" value="翻译"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="定时发布">
            <el-form-item>
              <el-date-picker
                v-model="date"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                style="width: 100%;"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item label="文章分类" prop="class">
            <el-checkbox-group v-model="ruleForm.class">
              <el-checkbox label="深度学习" name="class"></el-checkbox>
              <el-checkbox label="深入浅出Java" name="class"></el-checkbox>
              <el-checkbox label="技术杂谈" name="class"></el-checkbox>
              <el-checkbox label="算法与数据结构" name="class"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="发布形式" required>
            <el-radio-group v-model="status">
              <el-radio label="0">公开</el-radio>
              <el-radio label="1">私密</el-radio>
              <el-radio label="2">用户可见</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章摘要" prop="summary">
            <el-input type="textarea" 
            v-model="ruleForm.summary" 
            placeholder="摘要要求 200 字以内"
            :autosize="{ minRows: 6, maxRows: 6}"></el-input>
          </el-form-item>
        </el-form>
        <el-dialog
          width="30%"
          title="提示"
          :visible.sync="innerVisible"
          append-to-body
          center>{{ tipDialog }}
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="submitForm('ruleForm')">保存草稿</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">发布文章</el-button>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
import { oneInsert } from '@/api/article'
import { oneOf,dateToInt } from 'utils/tools'
import {
  arrayElementToObjectIsArticleType,
  arrayElementToObjectIsArticleTag,
  } from 'utils/util';

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
      titleInput: '',
      content: '',
      tagInputValue: '',
      tagInputVisible: false,
      isAddTag: false,
      outerVisible: false,
      innerVisible: false,
      tipDialog: '',
      screenWidth: 0,
      screenHeight:0,
      subTitleInput: '',
      date: '',
      status: '0',
      ruleForm: {
        articleTag: [],
        articleFlag: '',
        class: [],
        summary: ''
      },
      rules: {
        articleTag: [
          { type: 'array', required: true, message: '请至少添加一个标签', trigger: 'change' }
        ],
        articleFlag: [
          { required: true, message: '请选择文章标签', trigger: 'change' }
        ],
        class: [
          { type: 'array', required: true, message: '请至少选择一个文章分类', trigger: 'change' }
        ],
        summary: [
          { required: true, message: '请填写文章摘要', trigger: 'blur' }
        ]
      },
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
    }
  },
  methods: {
    submitForm(formName) {//用于提交文章表单
      // this.outerVisible = false;
      this.$refs[formName].validate((valid) => {
        console.log(this.ruleForm.class);
        
        if (valid) {
          if(this.titleInput === '') {
            this.tipDialog = "文章的标题不能为空";
            this.innerVisible = true;
          }else if(this.content === ''){
            this.tipDialog = "文章的内容不能为空";
            this.innerVisible = true;
          }else {
            oneInsert({
              userId: 0,
              addTime: dateToInt(new Date),
              modifyTime: dateToInt(new Date),
              title: this.titleInput, 
              subTitle: this.subTitleInput, 
              content: this.content, 
              addTime: Math.floor(new Date().getTime() / 1000),
              status: this.status,
              summary: this.ruleForm.summary,
              classes: arrayElementToObjectIsArticleType(this.ruleForm.class),//[{name: "safa"}],//this.ruleForm.class,
              articleFlag: this.ruleForm.articleFlag,//this.ruleForm.articleFlag,
              publishTime: dateToInt(this.date),
              tags: arrayElementToObjectIsArticleTag(this.ruleForm.articleTag),
            }).then(res => {
              this.tableData = res.data;
            });
          }
        } else {
          return false;
        }
      });
    },
    handleClose(tag) {//关闭标签
      this.ruleForm.articleTag.splice(this.ruleForm.articleTag.indexOf(tag), 1);
    },

    showInput() {//点击展现隐藏按钮，显示tag
      this.tagInputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {//将元素添加进数组中
      if(oneOf(this.tagInputValue, this.ruleForm.articleTag)) {
        this.tipDialog = "不能添加相同的文章标签";
        this.innerVisible = true;
        return;
      }
      let tagInputValue = this.tagInputValue;
      if (tagInputValue) {
        this.ruleForm.articleTag.push(tagInputValue);
      }
      this.tagInputVisible = false;
      this.tagInputValue = '';

      if(this.ruleForm.articleTag.length === 5) this.isAddTag = true;
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