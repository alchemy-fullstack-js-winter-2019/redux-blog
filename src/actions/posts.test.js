import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { getPostsAction, GET_POSTS, getUserAction, GET_USER } from './posts';

jest.mock('../services/jsonApi.js');


describe('posts test', () => {
  it('fetches post and create action', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(getPostsAction());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: GET_POSTS,
        payload: ['posts']
      });
      done();
    }, 500);
  });
  it('dispatch get user', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(getUserAction());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: GET_USER,
        payload: { name:'user' }
      });
      done();
    }, 500
    );
  });
});
