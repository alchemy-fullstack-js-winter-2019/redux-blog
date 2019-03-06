import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { getPosts, GET_POSTS } from './posts';

jest.mock('../services/jsonApi.js');


describe('posts test', () => {
  it('fetches post and create action', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(getPosts());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: GET_POSTS,
        payload: ['posts']
      });
      done();
    }, 500);
  });
});
