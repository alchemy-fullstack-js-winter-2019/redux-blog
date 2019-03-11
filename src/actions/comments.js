import { getPostComments, getComment, getComments } from '../services/blogApiServices';

export const FETCH_COMMENTS_LOADING = 'FETCH_COMMENTS_LOADING';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = () => ({
  type: FETCH_COMMENTS,
  loadStart: FETCH_COMMENTS_LOADING,
  payload: getComments()
});

export const FETCH_COMMENT = 'FETCH_COMMENT';
export const fetchComment = commentId => ({
  type: FETCH_COMMENT,
  payload: getComment(commentId)
});

export const fetchPostComments = postId => ({
  type: FETCH_COMMENTS,
  payload: getPostComments(postId)
});
