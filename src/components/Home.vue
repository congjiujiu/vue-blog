<template lang="html">
    <div v-for='article in articles'>
        <blog :id="article.id" :title="article.title" :content="article.content" :time="article.time" :like-numbers="article.liked"></blog>
    </div>
</template>

<script>
import Blog from './Blog.vue';
import $ from 'jquery';
import marked from 'marked';

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
      this.$dispatch('home');
      var homeData;
      if (localStorage.getItem('homeData')) {
          homeData = localStorage.getItem('homeData');
          self.articles = JSON.parse(homeData);
          self.articles.map(function (article) {
             article.content = marked(article.content);
             localStorage.setItem(article.id, article.content);
          });
      } else {
          $.ajax({
              type: 'GET',
              url: window.sSession.server + 'getArticles.php'
          }).done(function (data) {
              localStorage.setItem('homeData', data);
              homeData = data;
              self.articles = JSON.parse(homeData);
              self.articles.map(function (article) {
                 article.content = marked(article.content);
                 localStorage.setItem(article.id, article.content);
              });
          });
      }
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
        width: 42%;
    }

    .container > div:nth-child(2n+2) {
        margin-left: 8%;
    }
</style>
