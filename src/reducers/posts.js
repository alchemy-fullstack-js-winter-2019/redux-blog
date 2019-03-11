import {
  FETCH_POSTS,
  UPDATE_POST_SEARCH_TERM,
  LOAD_POSTS_START,
  LOAD_POSTS_END
} from '../actions/posts';
const initialState = {
  posts: [],
  postSearchTerm: '',
  isLoading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: payload
      };
    case UPDATE_POST_SEARCH_TERM:
      return {
        ...state,
        postSearchTerm: payload
      };
    case LOAD_POSTS_START:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_POSTS_END:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
