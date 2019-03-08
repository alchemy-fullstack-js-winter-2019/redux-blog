import { FETCH_POSTS, FETCH_POST, UPDATE_POST_SEARCH_TERM } from '../action/posts';
import { RESET } from '../action/common/reset';

const initialState = {
  posts: [],
  post: {},
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS: 
      return { ...state, posts: action.payload };
    case FETCH_POST:
      return { ...state, post: action.payload };
    case UPDATE_POST_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case RESET:
      return { ...initialState };
    default: 
      return state;
  }
}
