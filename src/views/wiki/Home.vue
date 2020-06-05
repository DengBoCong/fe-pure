<template>
  <el-container>
    <el-header style="padding:0;">
      <Header></Header>
    </el-header>
    <el-main style="background:#efefef;height:100%;">
      <el-scrollbar>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-card shadow="never">
              <el-scrollbar style="height:100%;" >
                <Markdown :content="content"  :style="height"></Markdown>
              </el-scrollbar>
            </el-card>
            <el-card shadow="never" style="margin-top:10px;">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="空间" name="first"></el-tab-pane>
                <el-tab-pane label="页面" name="second"></el-tab-pane>
                <el-tab-pane label="社交" name="third"></el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="never">
              <el-tabs v-model="activeName1" @tab-click="handleClick">
                <el-tab-pane label="热门" name="first"></el-tab-pane>
                <el-tab-pane label="所有空间更新" name="second"></el-tab-pane>
                <el-tab-pane label="收藏空间更新" name="third"></el-tab-pane>
                <el-tab-pane label="社交" name="fourth"></el-tab-pane>
                <el-tab-pane label="分组空间更新" name="firth"></el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="six"></el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script>
import Header from './components/Header';
import Markdown from 'components/Markdown'

export default {
  name: 'Home',
  components: {
    Header,
    Markdown,
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  computed: {
    height(){
      return `height:${this.screenHeight-250}px`;
    }
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight:0,
      activeName: 'second',
      activeName1: 'first',
      content: `<h3><a id="_0"></a>项目说明（临时放置位置，后面会转移）</h3> <h4><a id="_2"></a>小程序项目相关说明</h4> <p>目前规划的小程序总体来说分为两个核心的功能，分别是垃圾分类查询以及垃圾分类趣味答题（普及）。通过这两个核心的功能进行拓展。</p> <ul class="contains-task-list"> <li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 垃圾分类查询：就是通过各种方式，去分辨用户想要查看的垃圾，简单的说就是一个搜索查询的过程，不过这个过程分为以下两种形式。 <ul> <li>第一就是通过图像识别来完成垃圾的查询：用户可以使用小程序拍照，系统会将照片上传到系统中，然后通过我预先训练的模型，去识别拍摄的垃圾是哪一类的或者更精确一点是哪个东西。当然不可能直接进行判定了，而是识别之后，会列出几个可能的选项，然后供用户选择，用户选择了较为接近的一项之后，将显示对应的垃圾分类的信息，以此来完成相应的垃圾分类查询。</li> <li>第二就是通过普通的搜索的形式：我打算是在主界面设置一个搜索框，用户可以快捷的点击搜索框，选择想要的查询的垃圾，查询之后就会呈现对应的垃圾分类信息。</li> </ul> </li> <li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 垃圾分类趣味答题：这个功能主要是为了普及垃圾分类的知识，我构想是通过垃圾分类答题的形式，完成学习。用于考核，评测等场景，分为五大功能：练习，考试，错题，收藏，排名；练习功能分为顺序答题和随机答题，模式分为答题模式和背题模式，答题模式可以在答完题目显示正确答案和帮助提示，可以进行跳题作答，背题模式可以直接查看正确答案和帮助提示，实时查看答题卡，统计答题情况，记忆功能，能够继续上次答题，也可以清除答题记录，重新答题。考试功能主要包括倒计时功能，随机取题功能，可单独对每个分类设置取题数量，答题时间，可以进行跳题作答，交卷评分，倒计时自动提示交卷；记忆功能，保存可下次继续做题。错题集功能主要是针对练习和答题两大模块的作答错题进行分类收集，可像练习功能一样进行答题模式和背题模式的作答方式，可移除错题，具有针对性的答题。收藏功能可以针对重点题目，错误题目进行收藏，然后重新重点练习；排名功能可以对每套试卷的作答人员进行分数等排名；答题记录可以随时查看用户的测试记录；针对部门考核，可以开启信息审核功能，只有通过审核的人员才可进入答题。支持开启和禁用练习功能。本程序还搭配管理后台，管理用户，系统设置，后台审核用户信息，发送模板消息通知用户，可以随时增加套题，增加题目，编辑题目，删除题目，以及使用模板批量的导入题目，查看答题记录，查看反馈意见等。</li> </ul> <ul> <li>技术功能点：PyTorch开源平台、百度识别库的accessToken、云开发、SpringBoot、Nginx、MySQL、docker（根据这些自行去拓展描述）</li> <li>相关说明：小程序的这个项目主打的不是技术有多强（当然，技术的含量还是有的，涉及到了图像处理，包括一些搜索匹配算法的实现，算是和人工智能沾了点边），这个项目主打的是实用，所以你们写文档的时候，技术和实用是主要呈现的地方。</li> </ul> <h4><a id="_12"></a>交通场景项目说明</h4> <p>讲道理，没什么好讲的，在车载的基础上，我只是重写搞过那个视频处理模型，贴合组委会的要求，仅此而已。</p> <h4><a id="_15"></a>交通场景项目说明</h4> <p><strong>没啥好说的，自己看赛题吧</strong><br /> <img src="https://img-blog.csdnimg.cn/20200605180225570.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" /></p>`,
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
  }
}
</script>

<style>
  
</style>