import { FETCH_POSTS, FETCH_POST, FETCH_POSTS_BY_USER, UPDATE_SEARCH_TERM } from '../actions/posts';

const initialState = {
  posts: [],
  post: {},
  term: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case FETCH_POSTS_BY_USER:
      return {
        ...state,
        posts: action.payload
      };

    case FETCH_POST:
      return {
        ...state,
        post: action.payload
      };
    
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        term: action.payload
      };

    default:
      return state;
  }
}
