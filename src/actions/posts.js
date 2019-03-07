import { getPostsApi } from '../services/jsonApi';

export const GET_POSTS = 'GET_POSTS';
export const getPostsAction = () => ({
  type: GET_POSTS,
  payload: getPostsApi()
});
