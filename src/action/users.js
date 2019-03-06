import { getUser } from '../services/blogApi';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: getUser()
});