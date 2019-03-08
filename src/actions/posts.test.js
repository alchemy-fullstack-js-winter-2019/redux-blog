import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { 
  getPostsAction,
  GET_POSTS,
  getUserAction,
  GET_USER, getUsersAction,
  GET_ALL_USERS,
  GET_POST,
  getPostAction,
  getCommentsByIdAction,
  GET_COMMENTS_BY_ID,
  getPostsByIdAction,
  GET_USER_POSTS,
  updateSearchTerm,
  UPDATE_SEARCH_TERM
} from './posts';

jest.mock('../services/jsonApi.js');


describe('actions test', () => {
  it('fetches posts and create action', done => {
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

  it('fetches a single user and dispatches an action', done => {
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
  it('fetches a all users and dispatches an action', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(getUsersAction());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: GET_ALL_USERS,
        payload: [{ name:'user' }, { name:'user' }]
      });
      done();
    }, 500
    );
  });

  it('fetches a single post by id', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(getPostAction());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: GET_POST,
        payload: { post: 'post' }
      });
      done();
    }, 500
    );
  });
  it('returns a list of comments by id ', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(getCommentsByIdAction());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: GET_COMMENTS_BY_ID,
        payload: [{ body: 'some comment' }, { body: 'some comment' }]
      });
      done();
    }, 500
    );
  });
  it('returns a list of posts by user id ', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(getPostsByIdAction());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: GET_USER_POSTS,
        payload: [{ body: 'some post' }, { body: 'some post' }]
      });
      done();
    }, 500
    );
  });

  it('returns the current search term', () => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, applyMiddleware(...middleware)
    );
    store.dispatch(updateSearchTerm());

    expect(reducer).toHaveBeenCalledWith(undefined, {
      type: UPDATE_SEARCH_TERM,
      payload: undefined
    });
  });
});
