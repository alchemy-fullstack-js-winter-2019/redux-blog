import { FETCH_USERS, FETCH_USER } from '../actions/users';

const initialState = {
  users: [],
  user: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS: 
      return {
        ...state,
        users: action.payload
      };
      
    case FETCH_USER: 
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}
