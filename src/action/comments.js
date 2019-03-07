import { getComments } from '../services/blogApi';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchcoments = () => ({
  type: FETCH_COMMENTS,
  payload: getComments()
});
