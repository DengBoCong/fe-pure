<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script>
import 'github-markdown-css/github-markdown.css';

export default {
  name: 'Markdown',
  components: {
    //
  },
  props: {
    content: {
      type: String,
    },
  },
  data() {
    return {
      // content: `<h1>Unicorns</h1><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p><p>All the things</p>`
    }
  }
}
</script>

<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>