export const getUsersApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
};

export const getUser = id => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json());
};

export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
};

export const getPost = id => {
  console.log('PAIGE', id);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json());
};
