import { GET_POSTS, GET_USER } from '../actions/posts';


const initialState = {
  posts: [],
  user: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_POSTS:
      return { ...state, posts: payload };
    case GET_USER:
      console.log('HERE', payload);
      return { ...state, user: payload };
    default:
      return state;
  }
}

