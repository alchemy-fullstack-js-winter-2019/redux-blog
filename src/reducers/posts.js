import { FETCH_POSTS } from '../action/posts';

const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS: 
      return { ...state, posts: action.payload };
    default: 
      return state;
  }
}
