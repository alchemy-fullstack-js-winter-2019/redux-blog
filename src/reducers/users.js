import { FETCH_USERS, FETCH_USER, FETCH_POST_BY_USER_ID } from '../action/users';
import { RESET } from '../action/common/reset';

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
      return { ...state, user: action.payload };
    case FETCH_POST_BY_USER_ID:
      return { ...state, posts: action.payload };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
