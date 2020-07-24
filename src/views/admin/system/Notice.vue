<template>
  <div>
    <el-card shadow="never"  body-style="padding:0;">
      <el-button type="primary" plain @click="addOneClick">新增通告</el-button>
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
          width="300"
          label="通知类型标识">
        </el-table-column>
        <el-table-column
          align="center"
          prop="contentColor"
          label="内容颜色"
          min-width="300">
        </el-table-column>
        <el-table-column
          align="center"
          prop="titleColor"
          label="标题颜色"
          min-width="300">
        </el-table-column>
        <el-table-column
          prop="sort"
          align="center"
          sortable
          width="100"
          label="排序">
        </el-table-column>
        <el-table-column
          prop="reserveTime"
          align="center"
          sortable
          width="100"
          label="预留时间">
        </el-table-column>
        <el-table-column
          prop="status"
          align="center"
          sortable
          width="100"
          label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#ff4949"
              inactive-color="#13ce66"
              @change="statusChange(scope.row.id, scope.row.status)">
            </el-switch>
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
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getAllNoticeMessage,
  deleteOneNoticeMessage, } from '@/api/message'
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
    addOneClick() {
      this.dialogFormVisible = true;
    }
  },
  data() {
    return {
      loading: true,
      screenWidth: 0,
      screenHeight:0,
      search: '',
      tableData: [],//表格数据
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
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
    reserveTime(timeStamp){
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
