import { getComments } from '../services/blogApi';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const LOAD_COMMENTS_START = 'LOAD_COMMENTS_START';
export const LOAD_COMMENTS_END = 'LOAD_COMMENTS_END';

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
  loadStart : LOAD_COMMENTS_START,
  loadEnd: LOAD_COMMENTS_END,
  payload: getComments()
});
