import { getComments } from '../services/blogApi';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = id => ({
  type: FETCH_COMMENTS,
  payload: getComments(id)
});
