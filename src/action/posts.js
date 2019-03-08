import { getPosts, getPost } from '../services/blogApi';


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

export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const updatePostSearchTerm = term => ({
  type: UPDATE_POST_SEARCH_TERM,
  payload: term
}); 
