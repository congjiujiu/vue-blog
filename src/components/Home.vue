<template lang="html">
    <div v-for='article in articles'>
        <blog :id="article.id" :title="article.title" :content="article.content" :time="article.time"></blog>
    </div>
</template>

<script>
import Blog from './Blog.vue'

export default {
  data() {
      let articles = [
          {
              'id': 1,
              'title': '第一篇文章',
              'content': 'this is my first test and skskskk this is my first test and this is my first test and this is my first test and',
              'time': 'Dec 10, 2015'
          },
          {
              'id': 2,
              'title': '第二篇文章',
              'content': 'this is my second test and skskskk this is my first test and this is my first test and this is my first test and',
              'time': 'Mar 1, 2016'
          },
          {
              'id': 3,
              'title': '第三篇文章',
              'content': 'this is my third test and skskskk this is my first test and this is my first test and this is my first test and',
              'time': 'Thu 29, 2016'
          },
          {
              'id': 4,
              'title': '第四篇文章',
              'content': 'this is my third test and skskskk this is my first test and this is my first test and this is my first test and',
              'time': 'Thu 29, 2016'
          },
          {
              'id': 5,
              'title': '第五篇文章',
              'content': 'this is my third test and skskskk this is my first test and this is my first test and this is my first test and',
              'time': 'Thu 29, 2016'
          }
      ];

      return {
          'articles': articles
      };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
      'blog': Blog
  }
};
</script>

<style lang="css">
    .container {
        width: 100%;
    }

    .container > div {
        display: inline-block;
        width: 46%;
    }

    .container > div:nth-child(2n+2) {
        margin-left: 8%;
    }
</style>
