<template>
  <div>
    <el-card shadow="never"  body-style="padding:0;">
      <el-button type="primary" plain @click="openAddClick">新增通告</el-button>
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
            <el-form label-position="left" class="demo-table-expand">
              <el-form-item label="标题">
                <span>{{ props.row.title }}</span>
              </el-form-item>
              <el-form-item label="内容">
                <span>{{ props.row.content }}</span>
              </el-form-item>
              <el-form-item label="通知链接">
                <span>{{ props.row.url }}</span>
              </el-form-item>
              <el-form-item label="备注说明">
                <span>{{ props.row.description }}</span>
              </el-form-item>
            </el-form>
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
          sortable
          align="center"
          prop="type"
          width="250"
          label="通知类型标识">
        </el-table-column>
        <el-table-column
          align="center"
          prop="contentColor"
          width="150"
          label="内容颜色">
        </el-table-column>
        <el-table-column
          align="center"
          prop="titleColor"
          width="150"
          label="标题颜色">
        </el-table-column>
        <el-table-column
          prop="sort"
          align="center"
          sortable
          width="100"
          label="排序">
        </el-table-column>
        <el-table-column
          prop="reserveTimeC"
          align="center"
          sortable
          width="300"
          label="预留时间">
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
            <el-button type="text" size="small" @click="editClick(scope.row.id)">编辑</el-button>
            <el-button @click="deleteClick(scope.row.id)" type="text" size="small" style="color:#F56C6C;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="收货地址" 
        :visible.sync="dialogFormVisible"
        width="60%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item label="类型标识" prop="type">
                <el-input v-model="ruleForm.type"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="标题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="标题/内容">
                <el-color-picker v-model="ruleForm.titleColor" style="margin-left:10px;"></el-color-picker>
                <el-color-picker v-model="ruleForm.contentColor" style="margin-left:30px;"></el-color-picker>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="标题/内容">
                <el-date-picker
                  v-model="ruleForm.reserveTime"
                  type="datetime"
                  placeholder="选择日期时间"
                  align="right"
                  style="width:100%;"
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
            <el-form-item label="通告内容">
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="ruleForm.content">
              </el-input>
            </el-form-item>
          </el-row>
          <el-row :gutter="10">
            <el-form-item label="通告链接">
              <el-input v-model="ruleForm.url"></el-input>
            </el-form-item>
          </el-row>
          <el-row :gutter="10">
            <el-form-item label="备注说明">
              <el-input v-model="ruleForm.description"></el-input>
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
import { getAllNoticeMessage,
  deleteOneNoticeMessage,
  addOrUpdateOneNoticeMessage } from '@/api/message'
import { getDate } from 'utils/tools'

export default {
  name: 'Notice',
  components: {
    //
  },
  methods: {
    deleteClick(id) {
      this.$confirm('此操作将永久删除该通告，可能是系统的重要通告, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteOneNoticeMessage({id:id}).then(res => {
          if (res.data.code == 0) {
            this.tableData = res.data.data;
            this.$message({
              message: "通告删除成功, 已为您刷新数据",
              type: "success"
            });
          } else {
            this.$message.error(
              "通告删除失败, 错误提示: " + res.data.msg
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
    editClick(id) {
      console.log(id);
      this.dialogFormVisible = true;
    },
    openAddClick() {
      this.dialogFormVisible = true;
    },
    addOneClick() {
      this.submitLoading = true;
      addOrUpdateOneNoticeMessage(this.ruleForm).then(res => {
        if(res.data.code == 0) {
          this.tableData = res.data.data;
          this.$message({
            message: "通告添加成功, 已为您刷新数据",
            type: "success"
          });
        } else {
          this.$message.error(
            "通告添加失败, 错误提示: " + res.data.msg
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
    initFrom() {
      this.ruleForm.id = 0;
      this.ruleForm.title = '';
      this.ruleForm.type = '';
      this.ruleForm.sort = 0;
      this.ruleForm.content = '';
      this.ruleForm.reserveTime = 0;
      this.ruleForm.url = '';
      this.ruleForm.status = 0;
      this.ruleForm.description = '';
      this.ruleForm.titleColor = '#666666';
      this.ruleForm.contentColor = '#666666';
    },
    statusChange(id, status) {
      addOrUpdateOneNoticeMessage({id:this.statusFocusId,status:id,sort:-1}).then(res => {
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
  },
  data() {
    return {
      loading: true,
      submitLoading: false,
      screenWidth: 0,
      screenHeight:0,
      search: '',
      statusFocusId: 0,//用于状态改变记录id
      tableData: [],//表格数据
      dialogFormVisible: false,
      statusList: [{
        label: '下线',
        value: '0',
      },{
        label: '上线',
        value: '1',
      }],
      ruleForm: {
        id: 0,
        title: '',
        type: '',
        sort: 0,
        content: '',
        reserveTime: 0,
        url: '',
        status: 0,
        description: '',
        titleColor: '#666666',
        contentColor: '#666666',
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
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getAllNoticeMessage().then(res => {
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
    },
    reserveTimeC(timeStamp){
      return getDate(timeStamp, 'year');
    }
  }
}
</script>

<style lang="less">
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 95%;
  }
</style>
