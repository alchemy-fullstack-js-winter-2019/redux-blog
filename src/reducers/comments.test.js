import reducer from './comments';
import { FETCH_COMMENT, FETCH_COMMENTS } from '../actions/comments';

describe('Comments reducer', () => {
  it('handles a fetch comment action', () => {
    const state = {
      commentDetail: {
        postId: null,
        body: ''
      }
    };
    const fetchedState = reducer(state, {
      type: FETCH_COMMENT,
      payload: {
        postId: 2,
        body: 'blahblahblah'
      }
    });
    expect(fetchedState).toEqual({
      commentDetail: {
        postId: 2,
        body:'blahblahblah'
      },
      loading: false
    });
  });

  it('handles a fetch comments action', () => {
    const state = {
      comments: [{
        postId: null,
        body: ''
      }]
    };
    const fetchedState = reducer(state, {
      type: FETCH_COMMENTS,
      payload: [{
        postId: 2,
        body:'blahblahblah'
      }]
    });
    expect(fetchedState).toEqual({
      comments: [{
        postId: 2,
        body:'blahblahblah'
      }],
      loading: false
    });
  });
});
