<template lang="html">
    <div class="content">
        {{content}}
    </div>
</template>

<script>
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
      console.log(localStorage.getItem(self.$route.query.id));
      self.content = localStorage.getItem(self.$route.query.id);
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
