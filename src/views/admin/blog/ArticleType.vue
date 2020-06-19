<template>
  <div>
    <el-card shadow="never" style="margin-top:10px;width:99%;padding:0;">
      <el-container>
        <el-button type="primary" plain @click="dialogFormVisible = true">新建</el-button>
        <el-dialog title="添加文章类别" :visible.sync="dialogFormVisible" center>
          <el-form :model="form">
            <el-form-item label="分类专栏名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="on" placeholder="分类专栏名称 10 字以内" clearable></el-input>
            </el-form-item>
            <el-form-item label="分类专栏简介" :label-width="formLabelWidth">
              <el-input
                type="textarea"
                v-model="form.description"
                placeholder="分类专栏简介要求 200 字以内"
                :autosize="{ minRows: 6, maxRows: 6}"
              ></el-input>
            </el-form-item>
            <el-form-item label="分类专栏配图" :label-width="formLabelWidth">
              <el-upload
                class="upload-demo"
                drag
                :limit="1"
                :on-success="uploadSuccess"
                action="http://localhost:8080/upload/articleTypeCover">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label label-width="40%">
              <el-switch v-model="form.status" active-text="启用" inactive-text="不启用"></el-switch>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="submitArticleType"
              :loading="addArticleButtonStatus"
            >添 加</el-button>
          </div>
        </el-dialog>
      </el-container>
    </el-card>
    <el-table :data="tableData" border :max-height="height" style="width: 99%;">
      <el-table-column fixed prop="sort" label="排序" header-align="center" align="center"></el-table-column>
      <el-table-column prop="fontCover" label="封面" header-align="center" align="center">
        <template slot-scope="scope">
          <div class="block">
            <el-image
              src="https://img-blog.csdnimg.cn/20200522154246646.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RCQ18xMjE=,size_16,color_FFFFFF,t_70"
              fit="fill"
              style="width:100px;height:100px;"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="类别" header-align="center" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" header-align="center" align="center"></el-table-column>
      <el-table-column prop="articleNum" label="文章数" header-align="center" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">文章</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button
            @click="handleDelete(scope.$index, scope.row)"
            type="text"
            style="color:red;"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  getArticleType,
  setArticleTypeOne,
  deleteArticleTypeOne
} from "@/api/article";

export default {
  name: "ArticleType",
  components: {
    //
  },
  data() {
    return {
      addArticleButtonStatus: false, //添加按钮状态
      screenWidth: 0,
      screenHeight: 0,
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: "",
        description: "",
        status: 0,
        fontCover: "",//分类专栏封面url
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    submitArticleType() {
      //文章分类专栏新建按钮事件
      this.addArticleButtonStatus = true;
      setArticleTypeOne(this.form).then(res => {
        this.addArticleButtonStatus = false;
        if (res.data.code == 0) {
          this.dialogFormVisible = false;
          this.tableData = res.data.data;
          this.$message({
            message: "文章分类专栏添加成功, 已为您刷新数据",
            type: "success"
          });
        } else {
          this.$message.error("文章分类添加失败, 错误提示: " + res.data.msg);
        }
      });
    },
    handleDelete(index, row) {
      //用于删除文章分类专栏
      this.$confirm("此操作将永久删除该类目, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteArticleTypeOne({
            id: row.id
          }).then(res => {
            if (res.data.code == 0) {
              this.tableData = res.data.data;
              this.$message({
                message: "文章分类专栏删除成功, 已为您刷新数据",
                type: "success"
              });
            } else {
              this.$message.error(
                "文章分类删除失败, 错误提示: " + res.data.msg
              );
            }
          });
        })
        .catch(() => {});
    },
    uploadSuccess(response, file, fileList) {
      //文章分类专栏封面图片上传
      if (response.code == 0) {
        this.form.fontCover = response.data;
      }
    }
  },
  computed: {
    height() {
      return this.screenHeight - 210;
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    getArticleType().then(res => {
      this.tableData = res.data.data;
    });
  }
};
</script>