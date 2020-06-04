<template>
  <div>
    <el-card shadow="never" :body-style="{ padding: '50px' }" style="width:100%;border:0">
      <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @error="true" style="float:left;margin-top:-15px;">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </el-avatar>
      <div style="padding: 14px;float:left;">
        <span>早安，Serati Ma，祝你开心每一天！</span>
        <div class="bottom clearfix">
          <el-button type="text" plain>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</el-button>
        </div>
      </div>
      <div style="padding: 14px;float:right;">
        <span>项目数</span>
        <span>1000</span>
        <el-divider direction="vertical"></el-divider>
        <span>博客数</span>
        <el-divider direction="vertical"></el-divider>
        <span>用户数</span>
        <el-divider direction="vertical"></el-divider>
        <span>网站访问</span>
      </div>
    </el-card>
    <el-card shadow="never" style="margin-top:10px;">
      <el-container>
        <router-link :to="{ name: 'admineditblog', params: { userId: 1 }}"><el-button type="primary" plain>主要按钮</el-button></router-link>
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
    </el-card>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      border
      :max-height="height"
      style="width: 100%;">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="te"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="st"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="hs"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="hf"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="qw"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="qr"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="qt"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="qy"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Blog",
    components: {
      //
    },
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    computed: {
      height(){
        return this.screenHeight-350;
      }
    },
    data() {
      return {
        screenWidth: 0,
        screenHeight:0, 
        search: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          te: '上海',
          st: '普陀区',
          hs: '上海市普陀区金沙江路 1518 弄',
          hf: 200333,
          qw: '上海',
          qr: '普陀区',
          qt: '上海市普陀区金沙江路 1518 弄',
          qy: 200333
        }]
      }
    },
    mounted() {
      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      // getTableData().then(res => {
      //   this.tableData = res.data;
      // });
    },
  }
</script>