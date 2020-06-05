<template>
  <el-container>
    <el-card :style="height" style="width:100%;">
      <div slot="header" class="clearfix">
        <el-page-header @back="goBack" content="详情页面"></el-page-header> 
      </div>
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

export default {
  name: 'ContentDetail',
  components: {
    Markdown,
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight:0,
      content: `<h1>Unicorns</h1><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p>`,
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
  },
  computed: {
    height(){
      return `height:${this.screenHeight-60}px`;
    }
  }
}
</script>