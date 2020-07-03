<template>
  <el-container>
    <el-card shadow="never" style="margin-top:10px;width:100%;">
      <div slot="header" class="clearfix">
        <span>正在进行的任务排程</span>
        <el-button style="float: right; padding: 3px 0" type="text">全部项目</el-button>
      </div>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="hover">
            <div slot="header" class="clearfix" style="height:30px;">
              <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
              </el-avatar>
              <div style="padding: 5px;float:left;">
                <span>AliPay</span>
              </div>
              <el-button type="text" style="float:right;margin-left:20px;">下载</el-button>
              <router-link to="/document/1"><el-button type="text" style="float:right;">查看</el-button></router-link>
            </div>
            <div style="font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。提供跨越设计与开发的体验解决方案。提供跨越设计与开发的体验解决方案。</div>
            <div style="margin-top:15px;font-size:13px;color:#969696;">
              <span style="float:right;">最新修改时间：2天前</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div style="background:#000000;">
              <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
              </el-avatar>
              <div style="padding: 5px;float:left;">
                <span>AliPay</span>
              </div>
            </div></br>
            <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
            <div style="margin-top:15px;font-size:13px;color:#969696;">
              <span>科学搬砖</span>
              <span style="float:right;">2天前</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div style="background:#000000;">
              <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
              </el-avatar>
              <div style="padding: 5px;float:left;">
                <span>AliPay</span>
              </div>
            </div></br>
            <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
            <div style="margin-top:15px;font-size:13px;color:#969696;">
              <span>科学搬砖</span>
              <span style="float:right;">2天前</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="hover">
            <div style="background:#000000;">
              <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
              </el-avatar>
              <div style="padding: 5px;float:left;">
                <span>AliPay</span>
              </div>
            </div></br>
            <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
            <div style="margin-top:15px;font-size:13px;color:#969696;">
              <span>科学搬砖</span>
              <span style="float:right;">2天前</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div style="background:#000000;">
              <el-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" @error="true" style="float:left;">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
              </el-avatar>
              <div style="padding: 5px;float:left;">
                <span>AliPay</span>
              </div>
            </div></br>
            <div style="margin-top:25px;font-size:13px;color:#969696;">提供跨越设计与开发的体验解决方案。</div>
            <div style="margin-top:15px;font-size:13px;color:#969696;">
              <span>科学搬砖</span>
              <span style="float:right;">2天前</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  components: {
    //
  },
  methods: {
    //
  },
  mounted() {
    //
  },
  data() {
    return {
      //
    }
  }
}
</script>