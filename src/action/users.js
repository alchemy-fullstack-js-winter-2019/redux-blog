import { getUsers, getUser, getPostsByUserId } from '../services/blogApi';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchUsers,
  FETCH_USERS,
  LOAD_USERS_START,
  LOAD_USERS_END
] = createAction('FETCH_USERS', getUsers);

export const [
  fetchUser,
  FETCH_USER,
  LOAD_USER_START,
  LOAD_USER_END
] = createAction('FETCH_USER', getUser);

export const [
  fetchPostByUserId,
  FETCH_POST_BY_USER_ID,
  LOAD_POST_BY_USER_START,
  LOAD_POST_BY_USER_END
] = createAction('FETCH_POST_BY_USER_ID', getPostsByUserId);
