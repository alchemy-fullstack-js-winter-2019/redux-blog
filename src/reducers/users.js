import { 
  FETCH_USERS, 
  LOAD_USERS_START,
  LOAD_USERS_END,
  REGISTER_USER,
  UPDATE_REG_NAME,
  UPDATE_REG_USERNAME,
  UPDATE_REG_WEBSITE,
  UPDATE_REG_EMAIL
} from '../actions/users';

const initialState = {
  users: [],
  isLoading: false,
  register: {
    name: 'name',
    username: 'username',
    website: 'website.com',
    email: 'mail@email.com'
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_REG_NAME:
      return {
        ...state,
        register: {
          ...state.register,
          name: payload
        }
      };
    case UPDATE_REG_USERNAME:
      return {
        ...state,
        register: {
          ...state.register,
          username: payload
        }
      };
    case UPDATE_REG_WEBSITE:
      return {
        ...state,
        register: {
          ...state.register,
          website: payload
        }
      };
    case UPDATE_REG_EMAIL:
      return {
        ...state,
        register: {
          ...state.register,
          email: payload
        }
      };
    case REGISTER_USER:
      return {
        ...state,
        users: [
          ...state.users, 
          { ...payload }
        ]
      };
    case FETCH_USERS:
      return {
        ...state,
        users: payload
      };
    case LOAD_USERS_START:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_USERS_END:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
