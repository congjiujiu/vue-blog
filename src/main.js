import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import Article from './components/Article.vue'

Vue.use(VueRouter)
const router = new VueRouter();
window.router = router;

router.map({
    '/home': {
        component: Home
    },
    '/blog': {
        component: Blog
    },
    '/article': {
        component: Article
    }
});

router.redirect({
    '*': '/home'
});

let sSession = window.sSession = {};
window.sSession.server = 'http://139.129.24.127/vueblog/data/';

router.start(App, '#app');

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
