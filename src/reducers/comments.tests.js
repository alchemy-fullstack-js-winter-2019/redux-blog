import reducer from './comments';
import { FETCH_COMMENTS } from '../action/comments';

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
});
