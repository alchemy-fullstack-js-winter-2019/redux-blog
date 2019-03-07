export const getPostsApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
};
export const getUserById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json()); 
};

export const getAllUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()); 
};

export const getPostById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json()); 
};
export const getCommentsById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json()); 
};
