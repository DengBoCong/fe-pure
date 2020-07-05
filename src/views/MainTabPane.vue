<template>
  <el-tabs tab-position="right" v-model="activeName" @tab-click="handleClick" class="size" :style="height" style="margin-top:1px;">
    <el-tab-pane v-for="item in articleTypeArray" :key="item.id" :label="item.name" :name="item.name"></el-tab-pane>
    <el-tab-pane label="-------------------" :disabled="true" name="second"></el-tab-pane>
    <el-container>
      <el-scrollbar style="width:100%;" :style="tableHeight">
        <el-table
          :data="tableData.filter(data => !search || data.articleEntity.title.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%;height:100%;"
          max-height="100%"
          v-loading="articleLoading">
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
        <el-container style="margin:10px;">
          <div class="block" style="margin-left:auto; margin-right:auto">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 15, 20, 25]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="articleTotalSize">
            </el-pagination>
          <div class="block" style="height:30px;"></div>
          </div>
        </el-container>
      </el-scrollbar>
    </el-container>
  </el-tabs>
</template>

<script>
import ArticleItem from 'components/context/ArticleItem';
import { 
  getTableData,
  getArticleTypeByStatus,
  getArticleByTypeId,
} from '@/api/article'

export default {
  name: 'MainTabPane',
  components: {
    ArticleItem,
  },
  computed: {
    height(){
      return `height:${this.screenHeight-61}px`;
    },
    tableHeight(){
      return `height:${this.screenHeight-46}px`;
    }
  },
  data() {
    return {
      articleTypeArray: [],//文章分类列表
      articleLoading: true,//文章列表加载标记
      articleTotalSize: 0,//对应类别下文章总数量
      search: '',
      currentPage: 1,
      activeName: '',//当前被选中的标签
      screenWidth: 0,
      screenHeight:0,
      tableData: [],//文章列表
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getArticleTypeByStatus({status:true}).then(res =>{
      this.articleTypeArray = res.data.data;
      if(res.data.data.length == 0) {
        this.articleLoading = false;
        return;
      }
      this.activeName = res.data.data[0].name;
      getArticleByTypeId({typeId:res.data.data[0].id}).then(result => {
        this.tableData = result.data.data;
        this.articleTotalSize = result.data.map;
        // console.log(JSON.stringify(result.data.data));
        this.articleLoading = false;
      });
    });
    // getTableData().then(res => {
    //   this.tableData = res.data;
    // });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(tab, event) {//右侧文章分类点击事件
      this.articleLoading = true;
      getArticleByTypeId({typeId:this.articleTypeArray[tab.index].id}).then(result => {
        this.tableData = result.data.data;
        this.articleTotalSize = result.data.map;
        // console.log(JSON.stringify(result.data.data));
        this.articleLoading = false;
      });
    },
  }
}
</script>