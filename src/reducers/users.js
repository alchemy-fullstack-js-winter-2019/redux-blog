import { FETCH_USER, FETCH_USERS, FETCH_USERS_LOADING } from '../actions/users';
import { RESET } from '../actions/common';

const initialState = {
  users: [],
  userDetail: { id: null, name: '', username: '', email: '' },
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case FETCH_USER:
      return {
        ...state,
        userDetail: {
          id: payload.id,
          name: payload.name,
          username: payload.username,
          email: payload.email
        },
        loading: false
      };
    case FETCH_USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
