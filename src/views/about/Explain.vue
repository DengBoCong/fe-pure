<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-main :style="height" class="hiddenScrollbar">
        <Markdown v-bind:content="content"></Markdown>
      </el-main>
      <el-aside width="500px" :style="height" class="hiddenScrollbar">
        <QuickSearch></QuickSearch>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import Markdown from 'components/Markdown';
import Header from 'components/Header'
import QuickSearch from 'components/context/QuickSearch'

export default {
  name: 'Explain',
  components: {
    Header,
    QuickSearch,
    Markdown,
  },
  methods: {
    //
  },
  data() {
    return {
      content: '<p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p><p>sd</p>',
      screenWidth: 0,
      screenHeight:0,
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
  }
}
</script>