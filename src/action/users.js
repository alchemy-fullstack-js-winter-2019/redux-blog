import { getUsers, getUser, getPostsByUserId } from '../services/blogApi';

export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_END = 'LOAD_USERS_END';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: LOAD_USERS_START,
  payload: getUsers(),
  loadEnd: LOAD_USERS_END
});

export const LOAD_USER_START = 'LOAD_USER_START';
export const LOAD_USER_END = 'LOAD_USER_END';

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = (id) => ({
  type: FETCH_USER,
  loadStart: LOAD_USER_START,
  payload: getUser(id),
  loadEnd: LOAD_USER_END
});

export const LOAD_POST_BY_USER_START = 'LOAD_POST_BY_USER_START';
export const LOAD_POST_BY_USER_END = 'LOAD_POST_BY_USER_END';

export const FETCH_POST_BY_USER_ID = 'FETCH_POST_BY_USER_ID';
export const fetchPostByUserId = (id) => ({
  type: FETCH_POST_BY_USER_ID,
  loadStart: LOAD_POST_BY_USER_START,
  payload: getPostsByUserId(id),
  loadEnd: LOAD_POST_BY_USER_END
});

