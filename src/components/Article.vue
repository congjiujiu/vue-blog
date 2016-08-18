<template lang="html">
    <div class="content">
        {{{content}}}
    </div>
</template>

<script>
import $ from 'jquery';
import marked from 'marked';
export default {
  data() {
      var mockContent = '';
      return {
          content: mockContent
      };
  },
  computed: {},
  ready() {
      var self = this;
      var aid = self.$route.query.id;
      if (localStorage.getItem(aid)) {
          self.content = localStorage.getItem(aid);
      } else {
          $.ajax({
              type: 'GET',
              url: window.sSession.server + 'getArticles.php'
          }).done(function (date) {
              let sdate = self.articles = JSON.parse(date);
              self.content = marked(sdate[aid]['content']);
              self.showTitle(sdate[aid]['title']);
          });
      }
  },
  attached() {},
  methods: {
      showTitle(title) {
          this.$dispatch('article', title);
      }
  },
  components: {}
};
</script>

<style lang="css">
    .article-border {
        margin-top: 40px;
        width: 80%;
        margin-left: 10%;
        border-top: 1px solid #a7adba;
        border-left: 1px solid #a7adba;
        border-right: 1px solid #a7adba;
        box-shadow: 3px 2px 10px #566b78;
    }

    .container > .content {
        width: 80%;
        align-items: center;
        margin-left: 10%;
        margin-top: 20px;
        color: #566b78;
    }

    .container > div pre, code {
        background: #f5f7f9;
        border-bottom: 1px solid #d8dee9;
        color: #a7adba;
    }

    .container > div pre {
        padding: 1em;
        border-left: 2px solid #69c;
    }

    .container > div code {
        padding: 2px 4px;
        vertical-align: text-bottom;
    }

    .container a {
        color: #e81c4f;
        text-decoration: none;
    }

    .container img {
        width: 100%;
        max-width: 800px;
    }
</style>
