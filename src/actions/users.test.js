import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import {
  fetchUser,
  FETCH_USER,
  fetchUsers,
  FETCH_USERS,
  FETCH_USERS_LOADING
} from './users';

jest.mock('../services/blogApiServices');

describe('Users actions', () => {
  it(`fetchUser creates an action where the payload 
      is a user derived from a promise`, done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchUser(1));
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_START'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_USER,
        payload: [{ 
          email: 'Sincere@april.biz', 
          id: 1, 
          name: 'Leanne Graham', 
          username: 'Bret' 
        }]
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
      done();
    }, 500);
  });

  it(`fetchUsers creates an action where the payload 
      is a list of users derived from a promise`, done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchUsers());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_USERS_LOADING
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_USERS,
        payload: [{
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
        }]
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
      done();
    }, 500);
  });
});
