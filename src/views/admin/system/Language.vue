<template>
  <div>
    <el-card shadow="never"  body-style="padding:0;">
      <el-button type="primary" plain @click="openAddClick">新增语言</el-button>
    </el-card>
    <el-card shadow="never" :style="height" body-style="padding:0;" class="hiddenScrollbar">
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(100, 100, 100, 0.8)"
        :data="tableData.filter(data => !search || data.type.toLowerCase().includes(search.toLowerCase()))"
        border
        :height="tableMaxHeight"
        style="width: 100%">
        <el-table-column
          align="center"
          sortable
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="所属板块标识">
        </el-table-column>
        <el-table-column
          sortable
          align="center"
          prop="key"
          label="key">
        </el-table-column>
        <el-table-column
          align="center"
          prop="zhCn"
          label="中文简体">
        </el-table-column>
        <el-table-column
          align="center"
          prop="enUs"
          label="English">
        </el-table-column>
        <el-table-column
          prop="zhTw"
          align="center"
          sortable
          label="中文繁体">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editClick(scope.row)">编辑</el-button>
            <el-button @click="deleteClick(scope.row.id)" type="text" size="small" style="color:#F56C6C;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="通告具体信息" 
        :visible.sync="dialogFormVisible"
        width="60%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item label="所属板块标识">
                <el-input v-model="ruleForm.type"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="名称key">
                <el-input v-model="ruleForm.key"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="中文简体">
                <el-input v-model="ruleForm.zhCn"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="English">
                <el-input v-model="ruleForm.enUs"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="中文繁体">
                <el-input v-model="ruleForm.zhTw"></el-input>
              </el-form-item>
            </el-col>
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
import { getAllLanguage,
deleteOneLanguage,
addOrUpdateOneLanguage } from '@/api/system'

export default {
  name: 'Language',
  components: {
    //
  },
  data() {
    return {
      loading: true,
      tableData: [],
      screenWidth: 0,
      screenHeight:0,
      search: '',
      dialogFormVisible: false,
      submitLoading: false,
      ruleForm: {
        id: 0,
        type: '',
        title: '',
        zhCn: '',
        zhTw: '',
        enUs: '',
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
  methods: {
    openAddClick() {
      this.initFrom();
      this.dialogFormVisible = true;
    },
    editClick(object) {
      this.ruleForm.id = object.id;
      this.ruleForm.title = object.title;
      this.ruleForm.type = object.type;
      this.ruleForm.zhCn = object.zhCn;
      this.ruleForm.zhTw = object.zhTw;
      this.ruleForm.enUs = object.enUs;
      this.dialogFormVisible = true;
    },
    deleteClick(id) {
      //deleteOneLanguage
      this.$confirm('此操作将永久删除该语言条目，请确保UI系统以移除该条目, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteOneLanguage({id:id}).then(res => {
          if (res.data.code == 0) {
            this.tableData = res.data.data;
            this.$message({
              message: "语言条目删除成功, 已为您刷新数据",
              type: "success"
            });
          } else {
            this.$message.error(
              "语言条目删除失败, 错误提示: " + res.data.msg
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
    addOneClick() {
      this.submitLoading = true;
      addOrUpdateOneLanguage(this.ruleForm).then(res => {
        if(res.data.code == 0) {
          this.tableData = res.data.data;
          this.$message({
            message: "语言条目添加成功, 已为您刷新数据",
            type: "success"
          });
        } else {
          this.$message.error(
            "语言条目添加失败, 错误提示: " + res.data.msg
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
      this.ruleForm.zhCn = '';
      this.ruleForm.zhTw = '';
      this.ruleForm.enUs = '';
    },
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getAllLanguage().then(res => {
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