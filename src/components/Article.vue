<template lang="html">
    <div class="content">
        {{content}}
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
</style>
