<template lang="html">
    <div class="content">
        {{content}}
    </div>
</template>

<script>
export default {
  data() {
      let mockContent = `<h2>content id is </h2> <h5> and this is the hhhh and some heheheh <h5>`;
    return {
        content: mockContent
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
