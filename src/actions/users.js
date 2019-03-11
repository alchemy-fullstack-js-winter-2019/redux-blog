import { getUsers, getUser } from '../services/blogApiServices';

export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: FETCH_USERS_LOADING,
  payload: getUsers()
});

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = (id) => ({
  type: FETCH_USER,
  payload: getUser(id)
});
