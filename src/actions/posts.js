import { 
  getPostsApi, 
  getUserById, 
  getPostById,
  getPostsById, 
  getCommentsById,
  getAllUsers } from '../services/jsonApi';

export const GET_POSTS = 'GET_POSTS';
export const getPostsAction = () => ({
  type: GET_POSTS,
  payload: getPostsApi()
});

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const getUsersAction  = () => ({
  type: GET_ALL_USERS,
  payload: getAllUsers()
});

export const GET_USER = 'GET_USER';
export const getUserAction = (id) => ({
  type: GET_USER,
  payload: getUserById(id)
});
export const GET_POST = 'POST';
export const getPostAction = (id) => ({
  type: GET_POST,
  payload: getPostById(id)
});


export const GET_COMMENTS_BY_ID = 'GET_COMMENTS_BY_ID';
export const getCommentsByIdAction = (id) => ({
  type: GET_COMMENTS_BY_ID,
  payload: getCommentsById(id)
});


export const GET_USER_POSTS = 'GET_USER_POSTS';
export const getPostsByIdAction = (id) => ({
  type: GET_USER_POSTS,
  payload: getPostsById(id)
});


export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = term => ({
  type: UPDATE_SEARCH_TERM,
  payload: term
});
