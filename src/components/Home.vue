<template lang="html">
    <div v-for='article in articles'>
        <blog :id="article.id" :title="article.title" :content="article.content" :time="article.time" :like-numbers="article.liked"></blog>
    </div>
</template>

<script>
import Blog from './Blog.vue';
import $ from 'jquery';

export default {
  data() {
      var articles = [];

      return {
          'articles': articles
      };
  },
  computed: {},
  ready() {
      $('.banner .home>a').css('color', '#000');
      var self = this;

      $.ajax({
          type: 'GET',
          url: window.sSession.server + 'getArticles.php'
      }).done(function (date) {
          let sdate = self.articles = JSON.parse(date);
          sdate.map(function (v) {
              localStorage.setItem(v.id, v.content);
          });
      });
  },
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
