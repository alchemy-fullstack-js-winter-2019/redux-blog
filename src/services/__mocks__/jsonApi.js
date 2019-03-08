export const getPostsApi = () => {
  return Promise.resolve([
    'posts'
  ]);
};
export const getUserById = () => {
  return Promise.resolve({
    name:'user'
  });
};
export const getAllUsers = () => {
  return Promise.resolve([
    { name:'user' }, { name:'user' }]);
};
export const getPostById = () => {
  return Promise.resolve(
    { post: 'post' });
};
export const getCommentsById = () => {
  return Promise.resolve([{ body: 'some comment' }, { body: 'some comment' }]);
};
export const getPostsById = () => {
  return Promise.resolve([{ body: 'some post' }, { body: 'some post' }]);
};


