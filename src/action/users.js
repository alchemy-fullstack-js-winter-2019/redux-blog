import { getUsers, getUser } from '../services/blogApi';

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


