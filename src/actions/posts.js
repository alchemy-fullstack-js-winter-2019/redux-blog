import { getPostsApi, getUserById } from '../services/jsonApi';

export const GET_POSTS = 'GET_POSTS';
export const getPostsAction = () => ({
  type: GET_POSTS,
  payload: getPostsApi()
});

export const GET_USER = 'GET_USER';
export const getUserAction = (id) => ({
  type: GET_USER,
  payload: getUserById(id)
});

