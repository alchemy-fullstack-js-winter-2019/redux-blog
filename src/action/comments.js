import { getComments } from '../services/blogApi';
import { createAction } from 'promise-middleware-redux';

export const [ 
  fetchComments, 
  FETCH_COMMENTS,
  FETCH_COMMENTS_LOADING,
  LOAD_COMMENTS_START, 
  LOAD_COMMENTS_END 
] = createAction('FETCH_COMMENTS', getComments);
