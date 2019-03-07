import reducer from './users';
import { FETCH_POST_BY_USER_ID, FETCH_USER, FETCH_USERS } from '../action/users';

describe('reducer test', () => {
  it('can handle the fetch user action', () => {
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
  
});
