import { getPosts, getPost } from '../services/blogApi';

export const LOAD_POSTS_START = 'LOAD_POSTS_START';
export const LOAD_POSTS_END = 'LOAD_POSTS_END';
export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  loadStart: LOAD_POSTS_START,
  payload: getPosts(),
  loadEnd: LOAD_POSTS_END
});

export const LOAD_POST_START = 'LOAD_POST_START';
export const LOAD_POST_END = 'LOAD_POST_END';
export const FETCH_POST = 'FETCH_POST';
export const fetchPost = id => ({
  type: FETCH_POST,
  loadStart: LOAD_POST_START,
  payload: getPost(id),
  loadEnd: LOAD_POST_END
});

export const UPDATE_POST_SEARCH_START = 'UPDATE_POST_SEARCH_START';
export const UPDATE_POST_SEARCH_END = 'UPDATE_POST_SEARCH_END';
export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const updatePostSearchTerm = term => ({
  type: UPDATE_POST_SEARCH_TERM,
  loadStart: UPDATE_POST_SEARCH_START,
  payload: term,
  loadEnd: UPDATE_POST_SEARCH_END
}); 
