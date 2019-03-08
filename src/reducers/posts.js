import { GET_POSTS, GET_USER, GET_POST, GET_COMMENTS_BY_ID, UPDATE_SEARCH_TERM } from '../actions/posts';


const initialState = {
  posts: [],
  comments: [],
  post: {},
  user: {},
  searchTerm: 'x'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_POSTS:
      return { ...state, posts: payload };
    case GET_USER:
      return { ...state, user: payload };
    case GET_POST: 
      return { ...state, post: payload };
    case GET_COMMENTS_BY_ID: 
      return { ...state, comments: payload };
    case UPDATE_SEARCH_TERM: 
      return { ... state, searchTerm: payload };
    default:
      return state;
  }
}

