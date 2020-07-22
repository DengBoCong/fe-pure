<template>
  <div>
    <el-card shadow="never"  body-style="padding:0;">
      <el-button type="primary" plain @click="refreshAccessPath">一键更新用户访问地址</el-button>
    </el-card>
    <el-card shadow="never" :style="height" body-style="padding:0;" class="hiddenScrollbar">
      <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button> -->
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(100, 100, 100, 0.8)"
        :data="tableData.filter(data => !search || data.accessPath.toLowerCase().includes(search.toLowerCase()))"
        border
        :max-height="tableMaxHeight"
        style="width: 100%">
        <el-table-column
          fixed
          align="center"
          sortable
          prop="id"
          width="100"
          label="ID">
        </el-table-column>
        <el-table-column
          sortable
          align="center"
          prop="accessPath"
          width="300"
          label="权限路径">
        </el-table-column>
        <el-table-column
          sortable
          align="center"
          prop="access"
          width="200"
          label="权限级别">
          <template slot-scope="scope">
            <el-select v-model="scope.row.access" :placeholder="scope.row.access"
              @change="accessChange"
              @focus="accessChangeFlag(scope.row.id, scope.row.status)">
              <el-option
                v-for="item in accessList"
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
          label="描述"
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
            <el-button type="text" size="small">查看</el-button>
            <el-button @click="deleteClick(scope.row.id)" type="text" size="small" style="color:#F56C6C;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllAcessPathOrderBySort,
  insertAndUpdateAccessPath,
  insertManyAccessPath,
  deleteOneAccessPath } from '@/api/access'

import { getAllRouteServer } from 'utils/util'
import { getUnion } from 'utils/tools'

export default {
  name: 'Access',
  components: {
    //
  },
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${ i }`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      loading: true,
      screenWidth: 0,
      screenHeight:0,
      data: generateData(),
      value: [],
      tableData: [],//表格数据
      accessInputVisible: false,//权限级别出现
      accessInputValue: '',//权限级别输入框
      accessFocusId: 0,
      search: '',
      accessList: [{
        label: '超级管理员',
        value: 'SUPER',
      },{
        label: '公开',
        value: 'PUBLIC',
      }]
    };
  },
  methods: {
    statusChange(id, status) {
      insertAndUpdateAccessPath({
        id: id, 
        status: status,
      }).then(res => {
        if(res.data.code != 0) this.$message.error("服务器响应出错");
      })
    },
    accessChange(id, status) {
      // console.log("value:"+id+ " "+this.accessFocusId);
      insertAndUpdateAccessPath({
        id: this.accessFocusId, 
        access: id,
        status: status,
      }).then(res => {
        if(res.data.code != 0) this.$message.error("服务器响应出错");
      })
    },
    accessChangeFlag(id) {
      this.accessFocusId = id
    },
    refreshAccessPath() {
      insertManyAccessPath(getAllRouteServer(this.$router.options.routes)).then(res => {
        this.tableData = getUnion(this.tableData, res.data.data)
        this.$message({
          message: "加载成功, 已为您刷新数据",
          type: "success"
        });
      })
    },
    deleteClick(id) {
      this.$confirm('此操作将永久删除该访问路径，可能导致系统访问问题, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteOneAccessPath({id:id}).then(res => {
          if (res.data.code == 0) {
            this.tableData = res.data.data;
            this.$message({
              message: "用户访问地址删除成功, 已为您刷新数据",
              type: "success"
            });
          } else {
            this.$message.error(
              "用户访问地址删除失败, 错误提示: " + res.data.msg
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
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getAllAcessPathOrderBySort().then(res => {
      // console.log(JSON.stringify(this.$route.meta));
      this.tableData = res.data.data;
      this.loading = false;
    }).catch(() => {
      this.$message.error(
        "网络出现问题！ "
      );
    });
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