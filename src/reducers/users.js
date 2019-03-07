import { GET_ALL_USERS } from '../actions/posts';
const initialState = {
  users: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_ALL_USERS:
      return { ...state, users: payload };
  }
  return state;
}
