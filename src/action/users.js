import { getUsersApi, getUser } from '../services/blogApi';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: getUsersApi()
});

export const FETCH_USER = 'FETCH_USER';

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: getUser()
});
