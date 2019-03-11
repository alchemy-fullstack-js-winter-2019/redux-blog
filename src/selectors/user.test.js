import { getAllUsers, getUserById } from './user';

describe ('user selectors', () => {
  it('can get a user by id', () => {
    const state = {
      users: {
        userDetail: {
          id: 3,
          name: 'user',
          username: 'username',
          email: 'u@u.com'
        }
      }
    };
    const retrievedState = getUserById(state);
    expect(retrievedState).toEqual({
      id: 3,
      name: 'user',
      username: 'username',
      email: 'u@u.com'
    });
  });

  it('can get a list of users', () => {
    const state = {
      users: {
        users: {
          0: {
            id: 3,
            name: 'user',
            username: 'username',
            email: 'u@u.com',
          },
          1: {
            id: 4,
            name: 'user1',
            username: 'username1',
            email: 'u1@u.com',
          }
        }
      }
    };
    const retrievedState = getAllUsers(state);
    expect(retrievedState).toEqual({
      '0': { id: 3, name: 'user', username: 'username', email: 'u@u.com' },
      '1': { id: 4, name: 'user1', username: 'username1', email: 'u1@u.com' }
    });
  });
});
