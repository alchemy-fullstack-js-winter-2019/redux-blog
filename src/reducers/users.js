import { FETCH_USERS } from '../action/users';

const initialState = {
  users: []
};

export default function reducers(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
