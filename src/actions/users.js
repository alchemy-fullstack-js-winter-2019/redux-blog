import { getUsers, registerNewUser } from '../services/blogApi';

export const FETCH_USERS = 'FETCH_USERS';
export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_END = 'LOAD_USERS_END';

export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: LOAD_USERS_START,
  loadEnd: LOAD_USERS_END,
  payload: getUsers()
});

export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = (user) => ({
  type: REGISTER_USER,
  loadStart: LOAD_USERS_START,
  loadEnd: LOAD_USERS_END,
  payload: registerNewUser(user)
});

export const UPDATE_REG_NAME = 'UPDATE_REG_NAME';
export const updateRegName = name => ({
  type: UPDATE_REG_NAME,
  payload: name
});

export const UPDATE_REG_USERNAME = 'UPDATE_REG_USERNAME';
export const updateRegUsername = username => ({
  type: UPDATE_REG_USERNAME,
  payload: username
});

export const UPDATE_REG_WEBSITE = 'UPDATE_REG_WEBSITE';
export const updateRegWebsite = website => ({
  type: UPDATE_REG_WEBSITE,
  payload: website
});

export const UPDATE_REG_EMAIL = 'UPDATE_REG_EMAIL';
export const updateRegEmail = email => ({
  type: UPDATE_REG_EMAIL,
  payload: email
});
