import { getUsers, getUser, getPostsByUserId } from '../services/blogApi';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: getUsers()
});

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = (id) => ({
  type: FETCH_USER,
  payload: getUser(id)
});

export const FETCH_POST_BY_USER_ID = 'FETCH_POST_BY_USER_ID';
export const fetchPostByUserId = (id) => ({
  type: FETCH_POST_BY_USER_ID,
  payload: getPostsByUserId(id)
});

