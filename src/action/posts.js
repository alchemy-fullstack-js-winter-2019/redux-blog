import { getPosts, getPost } from '../services/blogApi';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchPosts,
  FETCH_POSTS,
  LOAD_POSTS_START,
  LOAD_POSTS_END
] = createAction('FETCH_POSTS', getPosts);

export const [ 
  fetchPost, 
  FETCH_POST,
  LOAD_POST_START, 
  LOAD_POST_END 
] = createAction('FETCH_POST', getPost);

export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const updatePostSearchTerm = term => ({
  type: UPDATE_POST_SEARCH_TERM,
  payload: term
}); 
