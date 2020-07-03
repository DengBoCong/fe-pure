<template>
  <el-container>
    <el-aside width="300px" style="border-right:1px solid #D1D1D1;" :style="height" class="hiddenScrollbar">
      <el-button type="text" style="width:100%;">文档的全称</el-button>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-tree default-expand-all :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </el-aside>
    <el-main style="padding:0;" :style="height" class="hiddenScrollbar">
      <el-card shadow="never" body-style="padding:10px;color:#898989;" style="border:0;">
        <el-button type="text" style="color:#898989;"><i class="el-icon-edit"></i> 编辑本页</el-button>
        <el-divider direction="vertical"></el-divider>
        <span>
          <i class="el-icon-view">12837</i>
        </span>
      </el-card>
      <el-card shadow="never" style="border:0;">
        <Markdown v-bind:content="content"></Markdown>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import Markdown from 'components/Markdown';

export default {
  name: 'Document',
  components: {
    Markdown,
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  },
  data() {
    return {
      content: "<p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p>",
      screenWidth: 0,
      screenHeight:0,
      input: '',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      },{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      },{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      },{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      },{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      },{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
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