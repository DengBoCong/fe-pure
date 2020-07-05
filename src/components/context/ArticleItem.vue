<template>
  <div>
    <div style="margin-top:10px;">
      <el-button type="text" @click="cliickArticleItem(itemData.articleEntity.id)"><b>{{itemData.articleEntity.title}}</b></el-button>
    </div>
    <div style="margin-top:10px;">
      <i class="el-icon-paperclip"></i>
      <b>
        <el-tag
          v-for="item in itemData.tags"
          :key="item.id"
          type="info"
          size="medium"
        >{{item.content}}</el-tag>
      </b>
    </div>
    <div style="margin-top:10px;">
      <p>{{itemData.articleEntity.summary}}</p>
    </div>
    <div style="margin-top:10px;">
      <el-avatar
        size="small"
        src="https://img-blog.csdnimg.cn/20200522154246646.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
        @error="true"
      >
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </el-avatar>
      <span style="font-size:13px;">
        <el-link :underline="false" type="primary">DengBoCong</el-link>
        发布于 {{publishDate}}
      </span>
    </div>
    <div style="margin-top:10px;">
      <span>
        <i class="el-icon-view">{{itemData.articleEntity.readNum}}</i>
      </span>
      <el-divider direction="vertical"></el-divider>
      <span>
        <i class="el-icon-thumb">{{itemData.articleEntity.pickNum}}</i>
      </span>
      <el-divider direction="vertical"></el-divider>
      <span>
        <i class="el-icon-chat-dot-round">{{itemData.articleEntity.commentNum}}</i>
      </span>
    </div>
  </div>
</template>

<script>
import { getDate } from "utils/tools";

export default {
  name: "ArticleItem",
  components: {
    //
  },
  data() {
    return {
      publishTime: this.itemData.articleEntity.publishTime //发布时间戳
    };
  },
  computed: {
    publishDate: function() {
      //将发布时间戳计算为时间字符串
      return getDate(parseInt(this.publishTime), "year");
    }
  },
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    //
  },
  methods: {
    cliickArticleItem(id) {//点击进入文章详情页
      // this.$router.push({path: '/article/1',query: {article: row.articleEntity}});
      this.$router.push("/article/" + id);
    }
  }
};
</script>