import { FETCH_POSTS, FETCH_POST, UPDATE_POST_SEARCH_TERM } from '../action/posts';

const initialState = {
  posts: [],
  post: {},
  searchTerm: '',
  longestPosts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS: 
      return { ...state, posts: action.payload };
    case FETCH_POST:
      return { ...state, post: action.payload };
    case UPDATE_POST_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default: 
      return state;
  }
}
