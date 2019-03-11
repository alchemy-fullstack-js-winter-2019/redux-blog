import { fetchComments } from './comments';

jest.mock('../services/blogApi.js');

describe('comment actions', () => {
  it('gets all comments', () => {
    const result = fetchComments();

    expect(result).toEqual({
      type: 'FETCH_COMMENTS',
      payload: expect.any(Promise),
      loadEnd: 'LOAD_COMMENTS_END',
      loadStart: 'LOAD_COMMENTS_START'
    });
  });
});
