import { FETCH_COMMENTS, fetchComments } from './comments';
import { getComments } from '../services/blogService';

jest.mock('../services/blogService');

describe('actions test', () => {
  it('fetches comments', () => {
    const action = fetchComments();

    expect(action).toEqual({ 
      type: FETCH_COMMENTS,
      loadStart: 'LOAD_COMMENTS_START',
      loadEnd: 'LOAD_COMMENTS_END',
      payload:  getComments()
    });
  });
});
