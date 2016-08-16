<template lang="html">
    <div class="content">
        {{{content}}}
    </div>
</template>

<script>
import $ from 'jquery';
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
      if (localStorage.getItem(self.$route.query.id)) {
          self.content = localStorage.getItem(self.$route.query.id);
      } else {
          $.ajax({
              type: 'GET',
              url: window.sSession.server + 'getArticles.php'
          }).done(function (date) {
              let sdate = self.articles = JSON.parse(date);
              self.content = sdate[self.id];
          });
      }
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
    .container > .content {
        width: 80%;
        align-items: center;
        margin-left: 10%;
        margin-top: 40px;
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
