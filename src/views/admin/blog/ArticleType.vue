<template>
  <div>
    <el-card shadow="never" style="margin-top:10px;">
      <el-container>
        <el-button type="primary" plain @click="dialogFormVisible = true">新建</el-button>
        <el-dialog title="添加文章类别" :visible.sync="dialogFormVisible" center>
          <el-form :model="form">
            <el-form-item label="分类专栏名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="on" placeholder="分类专栏名称 10 字以内" clearable></el-input>
            </el-form-item>
            <el-form-item label="分类专栏简介" :label-width="formLabelWidth">
              <el-input type="textarea"
                v-model="form.description" 
                placeholder="分类专栏简介要求 200 字以内"
                :autosize="{ minRows: 6, maxRows: 6}">
              </el-input>
            </el-form-item>
            <el-form-item label="分类专栏配图" :label-width="formLabelWidth">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="" label-width="40%">
              <el-switch
                v-model="value1"
                active-text="启用"
                inactive-text="不启用">
              </el-switch>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-container>
    </el-card>
    <el-table
      :data="tableData"
      border
      :max-height="height"
      style="width: 99%;">
      <el-table-column
        fixed
        prop="sort"
        label="排序"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="fontCover"
        label="封面"
        header-align="center"
        align="center">
        <template slot-scope="scope">
          <div class="block">
            <el-image src="https://img-blog.csdnimg.cn/20200522154246646.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
              fit="fill"
              style="width:100px;height:100px;">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="类别"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="articleNum"
        label="文章数"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        header-align="center"
        align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">文章</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" style="color:red;" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getArticleType } from '@/api/article'

export default {
  name: 'ArticleType',
  components: {
    //
  },
  data() {
    return {
      value1: true,
      screenWidth: 0,
      screenHeight:0, 
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        description: '',
        
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  computed: {
    height(){
      return this.screenHeight-350;
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getArticleType().then(res => {
      this.tableData = res.data.data;
    });
  },
}
</script>