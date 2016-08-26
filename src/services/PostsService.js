import 'whatwg-fetch';

function getPosts() {
  return fetch('http://localhost:80/wp-json/wp/v2/posts', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(
    (res) => res.json(),
    (err) => err.text()
  );
}

function getPost(id) {
  return fetch(`http://localhost/wp-json/wp/v2/posts/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(
    (res) => res.json(),
    (err) => err.text()
  );
}

export default {
  getPosts,
  getPost,
};
