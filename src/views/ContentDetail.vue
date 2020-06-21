<template>
  <el-container>
    <el-card :style="height" style="width:100%;">
      <div slot="header" class="clearfix">
        <el-page-header @back="goBack" :content="title"></el-page-header> 
      </div>
      <el-card shadow="never" style="background:#F8F8F8;">
        <div>
          <span>
            原创
          </span>
          <el-divider direction="vertical"></el-divider>
          <span>
            DengBoCong
          </span>
          <el-divider direction="vertical"></el-divider>
          <span>
            {{publishTime}}
          </span>
          <el-divider direction="vertical"></el-divider>
          <div style="float:right;">
            <span>
              <i class="el-icon-view">{{readNum}}</i>
            </span>
            <el-divider direction="vertical"></el-divider>
            <span>
              <i class="el-icon-thumb">{{pickNum}}</i>
            </span>
            <el-divider direction="vertical"></el-divider>
            <span>
              <i class="el-icon-chat-dot-round">{{commentNum}}</i>
            </span>
          </div>
          <div style="margin-top:10px;">
            分类专栏：
            <b>
              <el-tag
                v-for="item in ['tsa','tga','tah']"
                :key="item"
                size="medium"
                style="background: #fff;"
              > {{item}} </el-tag>
            </b>
          </div>
          <div style="margin-top:10px;">
            DengBoCong版权所有，原创不易，点个关注再转发哦!
          </div>
        </div>
      </el-card>
      <el-container :style="height" style="width:100%;">
        <el-scrollbar style="height:100%;width:100%;" >
          <Markdown v-bind:content="content"></Markdown>
          <div style="height:100px;"></div>
        </el-scrollbar>
      </el-container>
    </el-card>
  </el-container>
</template>

<script>
import Markdown from 'components/Markdown';
import { getArticleByArticleId } from '@/api/article';
import { getDate } from "utils/tools";

export default {
  name: 'ContentDetail',
  components: {
    Markdown,
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight:0,
      content: "",//文章信息对象
      title: "",//文章标题以及子标题组合标题
      publishTime: "",//文章发布时间
      readNum: 0,//阅读量
      pickNum: 0,//点赞量
      commentNum: 0,//评论量
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getArticleByArticleId({articleId:this.$route.params.id}).then(res => {//通过文章id加载文章信息
      if(res.data.code == 0) {
        this.content = res.data.data.articleEntity.content;
        this.title = res.data.data.articleEntity.title + " - " + res.data.data.articleEntity.subTitle;
        this.publishTime = getDate(parseInt(res.data.data.articleEntity.publishTime), "year");
        this.readNum = res.data.data.articleEntity.readNum;
        this.pickNum = res.data.data.articleEntity.pickNum;
        this.commentNum = res.data.data.articleEntity.commentNum;
      } else {
        this.$message({
          showClose: true,
          message: '文章加载失败, 服务器反馈错误信息为: ' + res.data.meg,
          type: 'error'
        });
      }
    });
  },
  computed: {
    height(){
      return `height:${this.screenHeight-60}px`;
    }
  }
}
</script>