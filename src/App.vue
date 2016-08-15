<style language='css'>
    html {
      height: 100%;
    }

    body {
      margin: 0;
      padding: 40px 60px 0;
      font-family: Monaco, 'Microsoft YaHei';
    }

    .banner {
        height: 40px;
        width: 100%;
    }

    .banner .logo {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 70px;
    }

    .banner .logo img {
        left: 0;
        width: 100%;
        height: 100%;
    }

    .banner ul {
        position: absolute;
        right: 70px;
        margin: 6px 0;
    }

    .banner ul li {
        text-decoration: none;
        list-style: none;
        float: left;
        font-size: 20px;
        width: 80px;
        text-align: center;
    }

    .banner ul li a {
        color: rgb(135,135,135);
        text-decoration: none;
    }

    .banner ul li a:hover {
        color: #000;
        cursor: default;
    }

    .footer {
        height: 60px;
        line-height: 60px;
        width: 100%;
        text-align: center;
    }

    .footer span {
        color: rgb(135, 135, 135);
    }
</style>

<template>
    <div class="banner">
        <div class="logo">
            <img src="../static/img/logo.png" alt="logo" class='logo'/>
        </div>
        <ul>
            <li class='home'><a v-link="'/home'">Home</a></li>
            <li class='blog'><a v-link="'/blog'">Blog</a></li>
            <li class='link'><a v-link="'/link'">Link</a></li>
            <li class='about'><a v-link="'/about'">About</a></li>
        </ul>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
    <div class="footer">
        <span>vue-blog@congjiujiu  2016/08/14</span>
    </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
