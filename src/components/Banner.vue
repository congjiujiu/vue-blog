<template lang="html">
    <div class="banner">
        <div class="logo">
            <img src="../../static/img/logo.png" alt="logo" class='logo'/>
        </div>
        <div class="title">
            {{title}}
        </div>
        <ul>
            <li class='home'><a v-link="'/home'">Home</a></li>
            <li class='blog'><a v-link="'/blog'">Blog</a></li>
            <li class='link'><a v-link="'/link'">Link</a></li>
            <li class='about'><a v-link="'/about'">About</a></li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    data() {
        let mockTitle = '';
        return {
            title: mockTitle
        };
    },
    computed: {},
    ready() {},
    attached() {},
    events: {
        'show-mine' () {
            var self = this;
            self.title = 'Nighting';
            $('.container').removeClass('article-border');
        },
        'show-title' (stitle) {
            var self = this;
            self.title = stitle;
            $('.container').addClass('article-border');
        }
    },
    methods: {},
    components: {}
};
</script>

<style lang="css">
</style>
