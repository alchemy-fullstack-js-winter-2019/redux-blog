import reducer from './posts';
import { FETCH_POST, FETCH_POSTS } from '../actions/posts';

describe('Posts reducer', () => {
  it('handles a fetch post action', () => {
    const state = {
      postDetail: {
        id: null,
        userId: null,
        title: '',
        body: ''
      }
    };
    const fetchedState = reducer(state, {
      type: FETCH_POST,
      payload: {
        id: 1,
        userId: 'mc2',
        title: 'blah',
        body: 'blahblahblah'
      }
    });
    expect(fetchedState).toEqual({
      postDetail: {
        id: 1,
        userId: 'mc2',
        title: 'blah',
        body: 'blahblahblah'
      }
    });
  });

  it('handles a fetch posts action', () => {
    const state = {
      posts: [{
        id: null,
        userId: null,
        title: '',
        body: ''
      }]
    };
    const fetchedState = reducer(state, {
      type: FETCH_POSTS,
      payload: [{
        id: 1,
        userId: 'mc2',
        title: 'blah',
        body: 'blahblahblah'
      }]
    });
    expect(fetchedState).toEqual({
      posts: [{
        id: 1,
        userId: 'mc2',
        title: 'blah',
        body: 'blahblahblah'
      }]
    });
  });
});

