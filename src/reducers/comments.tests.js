import reducer from './comments';
import { FETCH_COMMENTS } from '../action/comments';
import { RESET } from '../action/common/reset';

describe('comments reducer tests', () => {
  it('can fetch comments from state', () => {
    const state = {
      comments: ['orange', 'banana', '420']
    };
    const reducerComments = reducer(state, {
      type: FETCH_COMMENTS,
      payload: ['orange', 'banana', '420']
    });
    expect(reducerComments).toEqual({ comments: ['orange', 'banana', '420'] });
  });
  it('can reset', () => {
    const state = {
      comments: ['orange', 'banana', '420']
    };
    const reducerReset = reducer(state, {
      type: RESET
    });
    expect(reducerReset).toEqual({ comments: [] });
  });
});
