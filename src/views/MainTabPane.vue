<template>
  <el-tabs tab-position="right" v-model="activeName" @tab-click="handleClick" class="size" style="margin-top:1px;">
    <el-tab-pane label="好好谈谈Java"  name="first" :style="height">
      <el-scrollbar style="height:100%;" >
          <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%;height:100%;"
            max-height="100%"
            @row-click="he">
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-container>
                  <el-input
                    v-model="search"
                    size="small "
                    placeholder="输入关键字搜索"/>
                  <el-divider direction="vertical"></el-divider>
                  <el-dropdown>
                    <el-button type="primary" plain size="small ">
                      时间<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>阅读量</el-dropdown-item>
                      <el-dropdown-item>点赞数</el-dropdown-item>
                      <el-dropdown-item>收藏数</el-dropdown-item>
                      <el-dropdown-item>评论数</el-dropdown-item>
                      <el-dropdown-item>时间</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-container>
              </template>
              <template slot-scope="scope">
                <ArticleItem :itemData="scope.row"></ArticleItem>
              </template>
            </el-table-column>
          </el-table>
          <el-container style="margin:20px;">
            <div class="block" style="margin-left:auto; margin-right:auto">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </div>
          </el-container>
      </el-scrollbar>
    </el-tab-pane>
    <el-tab-pane label="数据结构" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="人工智能-CV" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
import ArticleItem from 'components/context/ArticleItem';

export default {
  name: 'MainTabPane',
  components: {
    ArticleItem,
  },
  computed: {
    height(){
      return `height:${this.screenHeight-60}px`;
    }
  },
  data() {
    return {
      search: '',
      currentPage4: 4,
      activeName: 'first',
      screenWidth: 0,
      screenHeight:0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }]
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    he(row, column, event) {
      this.$router.push('/article/1');
    }
  }
}
</script>