<template>
  <el-container class="size">
    <el-main class="hiddenScrollbar">
      <el-card><!-- style="border:0;" shadow="never" -->
        <el-row>
          <el-col :span="6" style="text-align:center;">
            <el-avatar shape="square" :size="190" fit="fill" :src="avatar" @error="true">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
          </el-col>
          <el-col :span="18">
            <el-row>
              <el-col :span="24" style="text-align:center;">
                <p style="font-size:30px;color:#666666;"><b><i class="el-icon-s-promotion"></i> {{title}}</b></p>
              </el-col>
            </el-row>
            <el-row style="margin:10px;">
              <el-col :span="24" style="text-align:center;">
                <p style="font-size:15px;color:#6C6C6C;">{{slogan}}</p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" style="text-align:center;">
                <el-button type="text" icon="el-icon-picture-outline">照片组图</el-button>
                <el-divider direction="vertical"></el-divider>
                <router-link to="/advrecord"><el-button type="text" icon="el-icon-c-scale-to-original">炫酷简历</el-button></router-link>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text" icon="el-icon-postcard">联系方式</el-button>
              </el-col>
              <el-col :span="12" style="text-align:center;">
                <router-link to="/home"><el-button type="text" icon="el-icon-house">首页</el-button></router-link>
                <el-divider direction="vertical"></el-divider>
                <router-link to="/search"><el-button type="text" icon="el-icon-search">搜索</el-button></router-link>
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
                <p style="font-size:15px;line-height:25px;color:#6C6C6C;">{{description}}</p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card>
        <el-collapse v-model="activeNames">
          <el-collapse-item :name="item.id" v-for="item in itemArray" :key="item.id">
            <template slot="title">
              {{item.title}}<i :class="item.icon"></i>
            </template>
            <Markdown v-bind:content="item.content"></Markdown>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-main>
    <el-aside width="400px" class="hiddenScrollbar">
      <PersonCard style="border-left:1px solid #D1D1D1;"></PersonCard>
    </el-aside>
  </el-container>
</template>

<script>
import PersonCard from 'components/context/PersonCard';
import Markdown from 'components/Markdown';
import { getUserRecordByUserId } from '@/api/userRecord';

export default {
  name: "Record",
  components: {
    PersonCard,
    Markdown,
  },
  data() {
    return {
      activeName: 'second',
      activeNames: [],
      itemArray: [],
      title: "",
      slogan: "",
      avatar: "",
      description: "",
    }
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = '';
      console.log(tab, event);
    }
  },
  mounted() {
    getUserRecordByUserId({userId: 1}).then(res => {
      this.itemArray = res.data.data.itemEntities;
      this.title = res.data.data.userRecordEntity.title;
      this.slogan = res.data.data.userRecordEntity.slogan;
      this.avatar = res.data.data.userRecordEntity.avatar;
      this.description = res.data.data.userRecordEntity.description;
      for(let i = 0; i < this.itemArray.length; i++) {
        this.activeNames.push(this.itemArray[i].id);
      }
    })
  }
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