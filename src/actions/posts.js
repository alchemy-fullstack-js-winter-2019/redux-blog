export const GET_POSTS = 'GET_POSTS';
export const getPost = () => ({
  type: GET_POSTS,
  payload: getPostApi()
});
