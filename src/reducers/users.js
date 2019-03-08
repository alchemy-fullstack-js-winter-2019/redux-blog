import { GET_ALL_USERS, GET_USER_POSTS } from '../actions/posts';
const initialState = {
  users: [],
  postsByUser: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_ALL_USERS:
      return { ...state, users: payload };
    case GET_USER_POSTS:
      return { ...state, postsByUser: payload };
  }
  return state;
}
