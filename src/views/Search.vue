<template>
  <el-container>
    <el-header style="padding:0;">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">DengBoCong - Wiki </el-menu-item>
        <el-submenu index="2">
          <template slot="title">最近访问</template>
          <el-menu-item index="2-1" :disabled="true">无数据</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><router-link to="/admin" class="noneDe">用户中心</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/admin" class="noneDe">任务中心</router-link></el-menu-item>
        <el-submenu index="6" style="float:right;">
          <template slot="title">中文</template>
          <router-link to="/admin" class="noneDe"><el-menu-item index="admin">中文</el-menu-item></router-link>
          <router-link to="/admin" class="noneDe"><el-menu-item index="admin">English</el-menu-item></router-link>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container>
      <el-main style="padding:0;" :style="height" class="hiddenScrollbar">
        <el-card shadow="never">
          <el-row>
            <el-col :span="24">
              <i>找到约 239,000,000 条结果 （用时 0.47 秒）</i>
              <el-checkbox-group v-model="checkboxGroup1" style="float:right;">
                <el-checkbox-button v-for="city in ['上海', '北京', '广州', '深圳']" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-collapse>
                <el-collapse-item title="条件筛选 Filter" name="1">
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="复选框 A" border></el-checkbox>
                    <el-checkbox label="复选框 B" border></el-checkbox>
                    <el-checkbox label="复选框 C" border></el-checkbox>
                    <el-checkbox label="禁用" disabled border></el-checkbox>
                    <el-checkbox label="选中且禁用" disabled border></el-checkbox>
                  </el-checkbox-group>
                </el-collapse-item>
              </el-collapse>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="never">
          <el-table
            :show-header="false"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期">
              <template slot-scope="scope">
                <SearchItem :itemData="scope.row"></SearchItem>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-main>
      <el-aside width="500px" class="hiddenScrollbar">
        <RebotSearch></RebotSearch>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import RebotSearch from 'components/context/RebotSearch'
import SearchItem from 'components/context/SearchItem'

export default {
  name: 'Search',
  components: {
    RebotSearch,
    SearchItem,
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  computed: {
    height(){
      return `height:${this.screenHeight-61}px`;
    },
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight:0,
      activeIndex: '1',
      activeIndex2: '1',
      checkboxGroup1: '',
      checkList: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="less">
.noneDe {
   text-decoration:none;
   display:block;
}


.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>