import { getComments } from '../services/blogService';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const LOAD_COMMENTS_START = 'LOAD_COMMENTS_START';
export const LOAD_COMMENTS_END = 'LOAD_COMMENTS_END';

export const fetchComments = (id) => ({
  type: FETCH_COMMENTS,
  loadStart: LOAD_COMMENTS_START,
  payload: getComments(id),
  loadEnd: LOAD_COMMENTS_END
});
