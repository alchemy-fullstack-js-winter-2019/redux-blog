import { fetchUsers } from './users';

jest.mock('../services/blogApi.js');

describe('user actions', () => {
  it('gets all Users', () => {
    const result = fetchUsers();
    
    expect(result).toEqual({
      type: 'FETCH_USERS',
      loadStart: 'LOAD_USERS_START',
      loadEnd: 'LOAD_USERS_END',
      payload: expect.any(Promise)
    });
  });
});
