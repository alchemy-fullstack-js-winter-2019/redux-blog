import { getPosts, getPost, getUserPosts } from '../services/blogApiServices';

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: getPosts()
});

export const FETCH_POST = 'FETCH_POST';
export const fetchPost = id => ({
  type: FETCH_POST,
  payload: getPost(id)
});

export const fetchUserPosts = userId => ({
  type: FETCH_POSTS,
  payload: getUserPosts(userId)
});

export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const updatePostSearchTerm = searchTerm => ({
  type: UPDATE_POST_SEARCH_TERM,
  payload: searchTerm
});
