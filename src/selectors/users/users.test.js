import { getPostsByUserId, getUser, getUsers } from './users';

describe('users selectors test', () => {
  it('can get list of user from state', () => {
    const state = {
      users: {
        users: ['orange', 'banana', '420'] 
      }
    };
    const selectedUsers = getUsers(state);
    expect(selectedUsers).toEqual(['orange', 'banana', '420']);
  });

  it('it can get a user', () => {
    const state = {
      users: {
        user: {
          name: 'orange'
        }
      }
    };
    const selectedUser = getUser(state);
    expect(selectedUser).toEqual({ name: 'orange' });
  });

  it('it can get a post by user id', () => {
    const state = {
      users: {
        posts: ['orange', 'banana', '420']
      }
    };
    const selectedPosts = getPostsByUserId(state);
    expect(selectedPosts).toEqual(['orange', 'banana', '420']);
  });
});
