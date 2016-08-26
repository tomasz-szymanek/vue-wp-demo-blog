<template>
  <div class="post">
    <h2><a v-link="{ path: `/post/${post.id}` }">{{post.title.rendered}}</a></h1>
    <h4>{{post.date}}</h4>
    <span>{{post.author}}</span>
    <hr></hr>
  </div>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style scoped>
.post {
  margin: 0 50px 0 50px;
  text-align: left;
  font-family: Roboto;
}

.post a {
  text-decoration: none;
  color: #50E3C2;
}

.post a:hover {
  color: black;
}

h2 {
  color: #50E3C2;
  text-shadow: black 0px 0px 1px;
}

h2:hover {
  color: black;
}

span {
  font-style: italic;
  font-size: 10pt;
}
</style>
