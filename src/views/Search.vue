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
        <el-menu-item index="1">DengBoCong - 搜索页 </el-menu-item>
        <el-submenu index="2">
          <template slot="title">最近访问</template>
          <el-menu-item index="2-1" :disabled="true">无数据</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><router-link to="/home" class="noneDe">首页</router-link></el-menu-item>
        <el-submenu index="6" style="float:right;">
          <template slot="title">中文</template>
          <!-- <router-link to="/admin" class="noneDe"><el-menu-item index="admin">中文</el-menu-item></router-link> -->
          <el-menu-item index="admin">中文</el-menu-item>
          <el-menu-item index="admin">English</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container>
      <el-main style="padding:0;" :style="height" class="hiddenScrollbar">
        <el-card shadow="never">
          <el-row>
            <el-col :span="24">
              <i>找到约 0 条结果 （用时 0.17 秒）</i>
              <el-checkbox-group v-model="checkboxGroup1" style="float:right;">
                <el-checkbox-button disabled="false" v-for="city in ['工具', '资源', 'API', '文章']" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-collapse>
                <el-collapse-item title="条件筛选 Filter" name="1">
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="工具" border></el-checkbox>
                    <el-checkbox label="资源" border></el-checkbox>
                    <el-checkbox label="文章" border></el-checkbox>
                    <el-checkbox label="API" disabled border></el-checkbox>
                    <el-checkbox label="全部" disabled border></el-checkbox>
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
      <el-aside width="500px" :style="height" class="hiddenScrollbar">
        <QuickSearch></QuickSearch>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import SearchItem from 'components/context/SearchItem'
import QuickSearch from 'components/context/QuickSearch'

export default {
  name: 'Search',
  components: {
    QuickSearch,
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