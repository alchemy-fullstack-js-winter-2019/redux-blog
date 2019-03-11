import { FETCH_POST, FETCH_POSTS, UPDATE_POST_SEARCH_TERM } from '../actions/posts';
import { RESET } from '../actions/common';

const initialState = {
  posts: [],
  postDetail: { id: null, userId: null, title: '', body: '' },
  searchTerm: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: payload
      };
    case FETCH_POST:
      return {
        ...state,
        postDetail: {
          id: payload.id,
          userId: payload.userId,
          title: payload.title,
          body: payload.body
        }
      };
    case UPDATE_POST_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
