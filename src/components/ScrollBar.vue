<template>
  <el-scrollbar
    style="height:100%"
    :wrap-class="wrapClass"
    :wrap-style="wrapStyle"
    :view-class="viewClass"
    :view-style="viewStyle"
    :native="native"
    :tag="tag"
    :noresize="noresize">
    <slot></slot>
  </el-scrollbar>
</template>

<script>
export default {
  name: "ScrollBar",
  components: {
    //
  },
  data() {
    return {
      //滚动区域层class
        wrapClass:{
          wrapClass:true
        },
        wrapStyle:{
          fontWeight:800
        },
        //滚动整体区域的class
        viewClass:{
          viewClass:true
        },
        viewStyle:{
          // border:'1px solid #000000',
          // boxSizing:'border-box'
        },
        // native属性：如果为true就不显示el的bar，也就是el模拟出来的滚动条，如果为false就显示模拟的滚动条
        native:false,
        // tag 渲染出来的标签
        tag:'section',
        // noresize 是否刷新滚动条大小
        noresize:true,
    }
  },
}
</script>

<style>
  *{
    margin: 0;
    padding:0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>