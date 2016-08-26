<template>
  <div class="app">
    <div class="header">
      <h1>Tomasz Szymanek - Blog - JavaScript, Web Design</h1>
      <p>
        <a v-link="{ path: '/home' }"><span>Home</span></a>
        <a v-link="{ path: '/posts' }"><span>Posts</span></a>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Posts from './components/Posts';

export default {
  components: {
    Posts,
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0 !important;
}

.app {
  height: 100%;
  width: 100%;
  font-family: Roboto;
}

.header {
  padding: 20px 30px 2px 50px;
  background-color: #50E3C2;
  box-shadow: grey 2px 2px 20px;
}

.header a {
  margin-left: 20px;
  text-decoration: none;
  color: black;
  padding-bottom: 12px;
}

.header a:hover {
  border-bottom: solid 6px black;
}

.header h1 {
  text-shadow: black 0px 0px 5px;
}

.header h2 {
  text-shadow: black 0px 0px 1px;
}

</style>
