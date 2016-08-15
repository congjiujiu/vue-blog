<style lang="css" scoped>
    .wrapper {
        width: 100%;
        height: 300px;
        display: inline-block;
    }

    .wrapper:hover {
        background-color: rgb(239, 239, 239);
    }

    hr {
        margin: 20px 0;
        position: relative;
        left: 0;
        width: 50px;
    }

    .content {
        height: 170px;
        overflow: hidden;
        color: rgb(135,135,135);
    }

    .more {
        height: 20px;
        margin: 0;
        position: relative;
        bottom: 0;
        color: rgb(135,135,135);
    }

    .more > div {
        display: inline-block;
    }

    .more .img-wrap {
        float: left;
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }

    .more .img-wrap img {
        width: 100%;
        height: 100%;
    }

    .more .time {
        float: right;
    }
</style>

<template lang="html">
    <div class="wrapper" @click="showArticle(id)">
        <h2 id='title'>{{title}}</h2>
        <hr>
        <div class="content">{{content}}</div>
        <div class="more">
            <div class="like">
                <div class="img-wrap" @click="toggleLike()">
                    <img v-if="like" src="../../static/img/liked.png" alt="liked"/>
                    <img v-else src="../../static/img/like.png" alt="like"/>
                </div>
                <span>{{likeNumbers}} likes</span>
            </div>
            <div class="time">
                <span>{{time}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
    };
  },
  computed: {},
  props: {
      id: {
          type: String,
          required: true
      },
      title: {
          type: String,
          required: true
      },
      content: {
          type: String,
          required: true
      },
      like: {
          type: Boolean,
          default: false
      },
      likeNumbers: {
          type: String,
          default: 0
      },
      time: {
          type: String,
          required: true
      }
  },
  ready() {},
  attached() {},
  methods: {
      showArticle (id) {
          window.router.go({path:'/article', query:{id: id}});
      },
      toggleLike () {
          if ($('img-wrap>img').attr('alt') === 'like') {
              console.log('like');
          } else {
              console.log('liked');
          }
      }
  },
  components: {}
};
</script>
