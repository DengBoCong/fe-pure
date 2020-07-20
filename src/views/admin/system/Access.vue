<template>
  <div>
    <el-card shadow="never"  body-style="padding:0;">
      <el-button type="primary" plain @click="refreshAccessPath">一键更新用户访问地址</el-button>
    </el-card>
    <el-card shadow="never" :style="height" body-style="padding:0;" class="hiddenScrollbar">
      <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button> -->
      <el-table
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
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllAcessPathOrderBySort,
  insertAndUpdateAccessPath,
  insertManyAccessPath } from '@/api/access'

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
      console.log(this.$router.options.routes);
      insertManyAccessPath(this.$router.options.routes).then(res => {
        console.log(res.data.code);
        
      })
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getAllAcessPathOrderBySort().then(res => {
      // console.log(JSON.stringify(this.$route.meta));
      this.tableData = res.data.data;
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