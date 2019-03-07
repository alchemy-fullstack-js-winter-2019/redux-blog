import { getPosts } from '../services/blogApi';

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: getPosts()
});
