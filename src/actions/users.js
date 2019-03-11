import { getUsers, getUserById } from '../services/blogService';

export const FETCH_USERS = 'FETCH_USERS';
export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_END = 'LOAD_USERS_END';

export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: LOAD_USERS_START,
  payload: getUsers(),
  loadEnd: LOAD_USERS_END
});

export const FETCH_USER = 'FETCH_USER';
export const LOAD_USER_START = 'LOAD_USER_START';
export const LOAD_USER_END = 'LOAD_USER_END';

export const fetchUserById = (id) => ({
  type: FETCH_USER,
  loadStart: LOAD_USER_START,
  payload: getUserById(id),
  loadEnd: LOAD_USER_END
});
