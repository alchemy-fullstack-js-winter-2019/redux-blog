import { FETCH_COMMENT, FETCH_COMMENTS, FETCH_COMMENTS_LOADING } from '../actions/comments';
import { RESET } from '../actions/common';

const initialState = {
  comments: [],
  commentDetail: { postId: null, body: '' },
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: payload,
        loading: false
      };
    case FETCH_COMMENT:
      return {
        ...state,
        commentDetail: {
          postId: payload.postId,
          body: payload.body
        },
        loading: false
      };
    case FETCH_COMMENTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
