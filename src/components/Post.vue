<template>
  <div class="post">
    <h2>{{post.title.rendered}}</h1>
    <h4>{{post.date}}</h4>
    <p>
      {{{post.content.rendered}}}
    </p>
    <span>{{post.author}}</span>
    <div class="back">
        <a v-link="{ path: '/posts' }"><span> ^-- BACK</span></a>
    </div>
  </div>
</template>

<script>
import PostsService from '../services/PostsService.js';
import VueAsyncData from 'vue-async-data';

export default {
  components: {
  },
  mixins: [
    VueAsyncData.mixin,
  ],
  data() {
    return {
      post: {
        title: {
          rendered: 'Post not loaded!',
        },
        author: '',
        date: '',
        content: {
          rendered: '',
        },
      },
    };
  },
  asyncData(resolve, reject) {
    PostsService.getPost(this.$route.params.id).then((res) => {
      const date = new Date(res.date);
      const post = Object.assign(res, {
        date: `${date.getDate()}/${date.getMonth()}/${1900 + date.getYear()}`,
        author: 'Tomasz Szymanek',
      });
      resolve({
        post,
      });
    }, (err) => {
      reject({
        posts: err,
      });
    });
  },
};
</script>

<style scoped>
.post {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
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

.post .back {
  margin-top: 30px;
}

.post .back a span {
  font-size: 20pt;
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
