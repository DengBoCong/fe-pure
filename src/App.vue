<template>
  <div id="app"><router-view></router-view></div>
</template>

<script>
import Home from 'views/Home';

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>


<style lang="less">
@import "assets/css/base.css";
.size{
  width: 100%;
  height: 100%;
}
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
