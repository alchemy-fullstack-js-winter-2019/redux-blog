export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
};

export const getPostById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json());
};

export const getPostByUserId = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(res => res.json());
};

export const getComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json());
};

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
};

export const getUserById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json());
};
