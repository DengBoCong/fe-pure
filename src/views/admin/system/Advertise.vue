<template>
  <div>
    <el-card shadow="never"  body-style="padding:0;">
      <el-button type="primary" plain @click="openAddClick">新增广告</el-button>
    </el-card>
    <el-card shadow="never" :style="height" body-style="padding:0;" class="hiddenScrollbar">
      <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button> -->
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(100, 100, 100, 0.8)"
        :data="tableData.filter(data => !search || data.type.toLowerCase().includes(search.toLowerCase()))"
        border
        :height="tableMaxHeight"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-image :src="props.row.cover"></el-image>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          prop="id"
          width="100"
          label="ID">
        </el-table-column>
        <el-table-column
          align="center"
          prop="title"
          width="300"
          label="广告标题">
        </el-table-column>
        <el-table-column
          sortable
          align="center"
          prop="type"
          width="250"
          label="广告类型标识">
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          width="300"
          label="预留时间">
          <template slot-scope="scope">
            <span>{{reserveTimeC(scope.row.reserveTime)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          align="center"
          sortable
          width="100"
          label="状态">
          <template slot-scope="scope">
            <el-select v-model="scope.row.status"
              @change="statusChange"
              @focus="statusChangeFlag(scope.row.id, scope.row.status)">
              <el-option
                v-for="item in statusList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="description"
          width="400"
          label="备注说明">
        </el-table-column>
        <el-table-column
          prop="sort"
          align="center"
          sortable
          width="100"
          label="排序">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="150">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-link v-if="scope.row.url != ''" type="primary" target="_blank" :href="scope.row.url"><el-button type="text" size="small">前往</el-button></el-link>
            <el-button type="text" size="small" @click="editClick(scope.row)">编辑</el-button>
            <el-button @click="deleteClick(scope.row.id)" type="text" size="small" style="color:#F56C6C;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="广告具体信息" 
        :visible.sync="dialogFormVisible"
        width="60%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item label="广告标题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="类型标识">
                <el-input v-model="ruleForm.type"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="预留时间">
                <el-date-picker
                  v-model="ruleForm.reserveTime"
                  type="datetime"
                  placeholder="选择日期时间"
                  align="right"
                  style="width:100%"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="排序">
                <el-input v-model="ruleForm.sort"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item label="封面地址">
                <el-input v-model="ruleForm.cover"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-card body-style="text-align:center" shadow="never" style="border:0;">
              <el-upload
                class="upload-demo"
                drag
                :limit="1"
                :on-success="uploadSuccess"
                action="http://localhost:8080/upload/uploadAdvertiseCover"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-card>
          </el-row>
          <el-row :gutter="10">
            <el-form-item label="通告备注">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="ruleForm.description">
              </el-input>
            </el-form-item>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" :loading="submitLoading" @click="addOneClick">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getAllAdvertiseMessage,
addOrUpdateOneAdvertiseMessage,
deleteOneAdvertiseMessage, } from '@/api/message'
import { getDate, dateToInt } from 'utils/tools'

export default {
  name: 'Advertise',
  components: {
    //
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight:0,
      loading: true,
      submitLoading: false,
      tableData: [],
      statusFocusId: 0,
      statusList: [{
        label: '下线',
        value: '0',
      },{
        label: '上线',
        value: '1',
      }],
      search: '',
      dialogFormVisible: false,
      ruleForm: {
        id: 0,
        title: '',
        type: '',
        sort: 0,
        reserveTime: '',
        cover: '',
        status: 0,
        description: '',
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
      rules: {
        // name: [
        //   { required: true, message: '请输入活动名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        // region: [
        //   { required: true, message: '请选择活动区域', trigger: 'change' }
        // ],
        // date1: [
        //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // ],
        // date2: [
        //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        // ],
        // type: [
        //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        // ],
        // resource: [
        //   { required: true, message: '请选择活动资源', trigger: 'change' }
        // ],
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
      },
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    }
  },
  methods: {
    openAddClick() {
      this.initFrom();
      this.dialogFormVisible = true;
    },
    initFrom() {
      this.ruleForm.id = 0;
      this.ruleForm.title = '';
      this.ruleForm.type = '';
      this.ruleForm.sort = 0;
      this.ruleForm.status = 0;
      this.ruleForm.reserveTime = '';
      this.ruleForm.cover = '';
      this.ruleForm.description = '';
    },
    addOneClick() {
      //addAndUpdateOneAdvertise
      this.submitLoading = true;
      this.ruleForm.reserveTime = dateToInt(this.ruleForm.reserveTime);
      addOrUpdateOneAdvertiseMessage(this.ruleForm).then(res => {
        if(res.data.code == 0) {
          this.tableData = res.data.data;
          this.$message({
            message: "广告添加成功, 已为您刷新数据",
            type: "success"
          });
        } else {
          this.$message.error(
            "广告添加失败, 错误提示: " + res.data.msg
          );
        }
        this.submitLoading = false;
        this.dialogFormVisible = false;
      }).catch(() => {
        this.$message.error(
          "网络出现问题！ "
        );
        this.submitLoading = false;
        this.dialogFormVisible = false;
      });
    },
    editClick(object) {
      this.ruleForm.id = object.id;
      this.ruleForm.title = object.title;
      this.ruleForm.type = object.type;
      this.ruleForm.sort = object.sort;
      this.ruleForm.reserveTime = object.reserveTime;
      this.ruleForm.cover = object.cover;
      this.ruleForm.status = -1;
      this.ruleForm.description = object.description;
      this.dialogFormVisible = true;
    },
    deleteClick(id) {
      this.$confirm('此操作将永久删除该广告，可能是系统的重要广告, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteOneAdvertiseMessage({id:id}).then(res => {
          if (res.data.code == 0) {
            this.tableData = res.data.data;
            this.$message({
              message: "广告删除成功, 已为您刷新数据",
              type: "success"
            });
          } else {
            this.$message.error(
              "广告删除失败, 错误提示: " + res.data.msg
            );
          }
        }).catch(() => {
          this.$message.error(
            "网络出现问题！ "
          );
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    reserveTimeC(timeStamp){
      return getDate(timeStamp, 'year');
    },
    statusChange(id) {
      addOrUpdateOneAdvertiseMessage({id:this.statusFocusId,status:id,sort:-1}).then(res => {
        if(res.data.code != 0) this.$message.error("服务器响应出错");
      }).catch(() => {
        this.$message.error(
          "网络出现问题！ "
        );
      });
    },
    statusChangeFlag(id) {
      this.statusFocusId = id
    },
    uploadSuccess(response, file, fileList) {
      //文章分类专栏封面图片上传
      if (response.code == 0) {
        this.ruleForm.cover = response.data;
      } else {
        this.$message.error(
          "网络出现问题！ "
        );
      }
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getAllAdvertiseMessage().then(res => {
      this.tableData = res.data.data;
      this.loading = false;
    })
  },
  computed: {
    height(){
      return `height:${this.screenHeight-160}px;border:0;`;
    },
    tableMaxHeight(){
      return this.screenHeight-160;
    }
  }
}
</script>