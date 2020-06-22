<template>
  <el-container class="size">
    <el-main>
      <el-card><!-- style="border:0;" shadow="never" -->
        <el-row>
          <el-col :span="6" style="text-align:center;">
            <el-avatar shape="square" :size="190" fit="fill" src="https://img-blog.csdnimg.cn/20200622113122977.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"></el-avatar>
          </el-col>
          <el-col :span="18">
            <el-row>
              <el-col :span="24" style="text-align:center;">
                <p style="font-size:30px;color:#666666;"><b><i class="el-icon-s-promotion"></i> DengBoCong</b></p>
              </el-col>
            </el-row>
            <el-row style="margin:10px;">
              <el-col :span="24" style="text-align:center;">
                <p style="font-size:15px;color:#6C6C6C;">致力于成为中国第一，世界一流的中间件技术人</p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" style="text-align:center;">
                <el-button type="text" icon="el-icon-picture-outline">照片组图</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text" icon="el-icon-c-scale-to-original">切换效果</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text" icon="el-icon-postcard">联系方式</el-button>
              </el-col>
              <el-col :span="12" style="text-align:center;">
                <router-link to="/home"><el-button type="text" icon="el-icon-house">首页</el-button></router-link>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text" icon="el-icon-search">搜索</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    语言<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>中文简体</el-dropdown-item>
                    <el-dropdown-item>中文繁体</el-dropdown-item>
                    <el-dropdown-item>English</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
            <el-row style="margin:10px;">
              <el-col :span="24">
                <p style="font-size:15px;line-height:25px;color:#6C6C6C;">我有话说：喜欢钻研技术，主要倒腾NLP和JAVA，前端也会玩一下。本人编写博文均为学习使用，若博文引用的内容存在侵权问题望告知，立即删改！</p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              基本信息<i class="header-icon el-icon-info"></i>
            </template>
            <Markdown v-bind:content="content"></Markdown>
          </el-collapse-item>
          <el-collapse-item title="教育经历">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="校园经历">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="工作经历">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
          <el-collapse-item title="项目经历">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
          <el-collapse-item title="奖项荣誉时间线">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-main>
    <el-aside width="400px">
      <PersonCard style="border-left:1px solid #D1D1D1;"></PersonCard>
    </el-aside>
  </el-container>
</template>

<script>
import PersonCard from 'components/context/PersonCard';
import Markdown from 'components/Markdown';

export default {
  name: "Record",
  components: {
    PersonCard,
  },
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = '';
      console.log(tab, event);
    }
  },
}
</script>

<style lang="less">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>