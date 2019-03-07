import reducer from './users';
import { FETCH_POST_BY_USER_ID, FETCH_USER, FETCH_USERS } from '../action/users';

describe('reducer test', () => {
  it('can handle the fetch users from state', () => {
    const state = {
      users: {
        users: ['orange', 'banana', '420']
      }
    };
    const reducerUsers = reducer(state, {
      type: FETCH_USERS,
      payload: ['orange', 'banana', '420']
    });
    expect(reducerUsers).toEqual({ users: ['orange', 'banana', '420'] });
  });
  
  it('can fetch a user from state', () => {
    const state = {
      user: { 
        name: 'yolo' 
      }
    };
    const reducerUser = reducer(state, {
      type: FETCH_USER,
      payload: { name: 'yolo' }
    });
    expect(reducerUser).toEqual({ user: { name: 'yolo' } });
  });

  it('can handle the fetch posts by user id', () => {
    const state = {
      posts: ['orange', 'banana', '420']
    };
    const reducerUser = reducer(state, {
      type: FETCH_POST_BY_USER_ID,
      payload: ['orange', 'banana', '420']
    });
    expect(reducerUser).toEqual({ posts: ['orange', 'banana', '420'] });
  });
});
