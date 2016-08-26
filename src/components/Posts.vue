<template>
  <div class="posts">
    <div v-for="post in posts">
      <post-thumbnail :post="post"></post>
    </div>
  </div>
</template>

<script>
import PostThumbnail from './PostThumbnail';
import PostsService from '../services/PostsService.js';
import VueAsyncData from 'vue-async-data';

export default {
  components: {
    PostThumbnail,
  },
  mixins: [
    VueAsyncData.mixin,
  ],
  data() {
    return {
      posts: [
        {
          title: {
            rendered: 'Posts not loaded!',
          },
          author: '',
          date: '',
          content: {
            rendered: '',
          },
        },
      ],
    };
  },
  asyncData(resolve, reject) {
    PostsService.getPosts().then((res) => {
      const posts = res.map((post) => {
        const date = new Date(post.date);
        return Object.assign(post, {
          date: `${date.getDate()}/${date.getMonth()}/${1900 + date.getYear()}`,
          author: 'Tomasz Szymanek',
        });
      });
      resolve({
        posts,
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
  .posts {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
</style>
