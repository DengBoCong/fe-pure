<template>
  <div>
    <el-card style="width:100%;border:0;" shadow="never">
      <div class="demo-type" style="text-align:center;">
        <el-card>
          <div slot="header" class="clearfix">
            <span>快捷工具</span>
          </div>
          <div>
            <el-button type="text" disabled="false">暂无工具上线</el-button>
            <!-- <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text">更多...</el-button> -->
          </div>
        </el-card>
      </div>
      <el-divider content-position="center">相关说明</el-divider>
      <div>
        以上所有工具均为自主开发(平时看到别人的一些小工具觉得好用，就自己写了工具也算，嘿嘿嘿)，自己也会经常使用一些小工具，也算是代码量的积累。然后还要特别说明一下的是下面的机器人系统自己还在写，毕竟我主要研究NLP的，打算实现一个很牛逼的机器人系统，各位客官可以边用。当然，如果有什么创意的小工具想要我实现或者机器人解决不了的一些问题，可以戳下方，获取工单哦。
        <el-button type="text" @click="openLoading">获取工单</el-button>
      </div>
      <el-divider content-position="center">自研的在线机器人(测试中)</el-divider>
      <div>
        <el-card>
          <div slot="header" class="clearfix">
            <span>智能问答 - 机器人</span>
          </div>
          <SideRobotDialog></SideRobotDialog>
        </el-card>
      </div>
    </el-card>
    <el-dialog title="提交工单" :visible.sync="workorderDialogVisible">
      <WorkOrderCard></WorkOrderCard>
    </el-dialog>
  </div>
</template>

<script>
import SideRobotDialog from 'components/robot/SideRobotDialog'
import WorkOrderCard from 'components/context/WorkOrderCard'

export default {
  name: 'QuickSearch',
  components: {
    SideRobotDialog,
    WorkOrderCard,
  },
  methods: {
    openLoading() {
      const loading = this.$loading({
        lock: true,
        text: this.loadingTip,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        // this.workorderDialogVisible = true;
      }, 2000);
    },
  },
  data() {
    return {
      loadingTip: '转接中，正在为你拉取工单！',
      workorderDialogVisible: false,
    }
  },
  mounted() {
    //
  },
}
</script>
