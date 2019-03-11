import { FETCH_USERS, fetchUsers, FETCH_USER, fetchUserById } from './users';
import { getUsers, getUserById } from '../services/blogService';

jest.mock('../services/blogService');

describe('actions test', () => {
  it('fetches users', () => {
    const action = fetchUsers();

    expect(action).toEqual({ 
      type: FETCH_USERS,
      loadStart: 'LOAD_USERS_START',
      loadEnd: 'LOAD_USERS_END',
      payload:  getUsers()
    });
  });

  it('fetches users by id', () => {
    const action = fetchUserById(1);

    expect(action).toEqual({ 
      type: FETCH_USER,
      loadStart: 'LOAD_USER_START',
      loadEnd: 'LOAD_USER_END',
      payload:  getUserById(1)
    });
  });
});
