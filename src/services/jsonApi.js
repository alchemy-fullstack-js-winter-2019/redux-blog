export const getPostsApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
};
export const getUserById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json()); 
};
