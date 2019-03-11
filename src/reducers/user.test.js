import { } from '../reducers/users';
import reducer from './users';
import { getUserAction } from '../actions/posts';
import { getUserById } from '../services/jsonApi';

jest.mock('../services/jsonApi.js');

describe('users reducer', () => {
  it('can handle getting all users', () => {
    const state = {
      users: []
    };
    const getUsers = getUserAction();
    const updatedState = reducer(state, getUsers);
    expect(updatedState).toEqual({ users: [] });
  });

  it('can handle getting all posts by user', () => {
    const state = {
      users: []
    };
    const getUsers = getUserById();
    const updatedState = reducer(state, getUsers);
    expect(updatedState).toEqual({ users: [] });
  });
  
});
