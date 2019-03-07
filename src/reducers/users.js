import { FETCH_USERS, FETCH_USER, FETCH_POST_BY_USER_ID } from '../action/users';

const initialState = {
  users: [],
  user: {},
  posts: []
};

export default function reducers(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case FETCH_USER:
      console.log('Goodbye');
      return { ...state, user: action.payload };
    case FETCH_POST_BY_USER_ID:
      console.log('Hello');
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
